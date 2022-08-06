import { getTodayName } from '@utils/luxonModule';
import { prisma } from '@utils/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function dayHandler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method !== 'GET') {
    res.status(405).json({ error: `Method ${method} Not Allowed` });
    return;
  }

  let today = getTodayName();

  if (typeof today === 'string') {
    try {
      const data = await prisma.day.findFirst({
        where: {
          day: today,
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
