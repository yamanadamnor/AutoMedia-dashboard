import { NextApiRequest, NextApiResponse } from 'next';
import { fetcher } from '../../../components/utils';

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const {
    body: { startDate, endDate, type },
  }: { body: { startDate: string; endDate: string; type: 'sonarr' | 'radarr' } } = req;

  const baseUrl = 'http://192.168.1.157';

  const mediaServiceUrls = [
    {
      service: 'sonarr',
      port: 8989,
      url: '/api/calendar',
      apiKey: 'sonarr-api-key',
    },
    {
      service: 'radarr',
      port: 7878,
      url: '/api/v3/calendar',
      apiKey: 'radarr-api-key',
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

  const requestUrl = `${baseUrl}:${port}${url}?apikey=${apiKey}&start=${startDate}&end=${endDate}`;

  const mediaData = await fetcher(requestUrl);
  return res.json(mediaData);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return handlePost(req, res);
  }

  return res.status(405).json({
    statusCode: 405,
    message: 'Method not allowed',
  });
}
