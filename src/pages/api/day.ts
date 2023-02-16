import { getTodayName } from '@/utils/luxonModule';
import { client, type Day } from '@/utils/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function dayHandler(
  req: NextApiRequest,
  res: NextApiResponse<Day | { message: string | unknown }>
) {
  const { method } = req;

  if (method !== 'GET') {
    res.status(405).json({ message: `Method ${method} Not Allowed` });
    return;
  }

  let today = getTodayName();

  try {
    const data = await client.day.findFirst({
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
      res.status(404).json({ message: 'Day not found' });
      return;
    }

    res.status(200).json(data);
    return;
  } catch (error) {
    res.status(500).json({ message: 'Service database is not available' });
    return;
  }
}
