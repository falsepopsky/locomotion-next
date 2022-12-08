import { client } from './prisma';

export async function loadShows() {
  try {
    const result = await client.day.findMany({
      include: {
        series: {
          include: {
            show: true,
          },
        },
      },
    });
    return result;
  } catch (error) {
    console.error(error);
  }
}
