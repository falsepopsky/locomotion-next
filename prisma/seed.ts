import { prisma } from '../src/utils/prisma';

/* ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts
 */
async function main() {
  const result = await prisma.day.findFirst({
    where: {
      day: 'monday',
    },
    include: {
      series: {
        include: {
          show: true,
        },
      },
    },
  });

  if (!result) {
    console.log('result is undefined or null');
    return;
  }
  console.log(result);

  console.log(`prisma is done.`);
}

main();
