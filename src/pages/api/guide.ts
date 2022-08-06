import { prisma } from '@utils/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method !== 'GET') {
    res.status(405).json({ error: `Method ${method} Not Allowed` });
    return;
  }

  try {
    const result = await prisma.day.findMany({
      include: {
        series: {
          include: {
            show: true,
          },
        },
      },
    });
    res.status(200).json(result);
    return;
  } catch (error) {
    res.status(500).json({ error: error });
    return;
  }
}
