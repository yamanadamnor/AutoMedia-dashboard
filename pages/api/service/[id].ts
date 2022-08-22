import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req;

  let deletedUser = {};

  switch (method) {
    case 'DELETE':
      if (!id) return;
      try {
        deletedUser = await prisma.service.delete({
          where: {
            id: Array.isArray(id) ? parseInt(id[0]) : parseInt(id),
          },
        });
        res.status(200).send(deletedUser);
      } catch (error) {
        res.status(500).send('Could not delete service');
      }

      break;

    default:
      res.setHeader('Allow', ['GET', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
