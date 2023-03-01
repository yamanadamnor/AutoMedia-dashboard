import { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '../../../server/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req;

  // let handledService = {};

  switch (method) {
    case 'DELETE':
      if (!id) return;
      try {
        const handledService = await prisma.service.delete({
          where: {
            id: Array.isArray(id) ? parseInt(id[0]) : parseInt(id),
          },
        });
        res.status(200).send(handledService);
      } catch (error) {
        res.status(500).send('Could not delete service');
      }

      break;

    case 'PUT':
      if (!id) return;
      try {
        const data = req.body;
        console.log(data);
        const updatedService = await prisma.service.update({
          data,
          where: {
            id: Array.isArray(id) ? parseInt(id[0]) : parseInt(id),
          },
        });

        res.status(200).send(updatedService);
      } catch (error) {
        res.status(500).send('Could not edit service, try again');
      }

      break;

    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
