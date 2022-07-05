import { prisma } from '@utils/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function dayHandler(req: NextApiRequest, res: NextApiResponse) {
  const weekend = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const {
    query: { day },
    method,
  } = req;

  if (method !== 'GET') {
    res.status(405).json({ error: `Method ${method} Not Allowed` });
    return;
  }

  let dayResult = weekend.some((d) => d === day);

  if (!day || (typeof day !== 'string' && day.length >= 10) || !dayResult) {
    res.status(400).json({ message: 'Include a valid day name' });
    return;
  }

  if (typeof day === 'string') {
    try {
      const data = await prisma.day.findFirst({
        where: {
          day: day,
        },
        include: {
          series: {
            include: {
              show: true,
            },
          },
        },
      });

      if (!data) {
        res.status(404).json({ message: 'Record not found' });
        return;
      }

      res.status(200).json(data);
      return;
    } catch (error) {
      res.status(500).json({ error: error });
      return;
    }
  }
}
