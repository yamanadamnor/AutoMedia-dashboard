import { NextApiRequest, NextApiResponse } from 'next';
import { fetcher } from '../../../components/utils';

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { startDate, endDate, type }
  } = req

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const mediaServiceUrls = [
    {
      service: 'sonarr',
      port: 8989,
      url: '/api/v3/calendar',
      apiKey: process.env.NEXT_PUBLIC_SONARR_API,
    },
    {
      service: 'radarr',
      port: 7878,
      url: '/api/v3/calendar',
      apiKey: process.env.NEXT_PUBLIC_RADARR_API,
    },
  ];

  if (!type) {
    return res.status(400).json({
      message: 'Missing required parameter in body: type',
    });
  }

  const serviceConfig = mediaServiceUrls.find((service) => service.service === type);

  if (!serviceConfig) return;
  const { port, url, apiKey } = serviceConfig;

  let requestUrl = `${baseUrl}:${port}${url}?apikey=${apiKey}&start=${startDate}&end=${endDate}`;

  requestUrl += type === 'sonarr' ? '&includeSeries=true' : '';

  const mediaData = await fetcher(requestUrl);
  return res.json(mediaData);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return handleGet(req, res);
  }

  return res.status(405).json({
    statusCode: 405,
    message: 'Method not allowed',
  });
}
