import { prisma } from './prisma';

export async function loadShows() {
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
    return result;
  } catch (error) {
    console.error(error);
  }
}
