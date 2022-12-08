import { PrismaClient } from '@prisma/client';

declare global {
  // allow global `var` declarations

  // eslint-disable-next-line no-var
  // eslint-disable-next-line no-unused-vars
  var prisma: PrismaClient | undefined;
}

export const client = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') global.prisma = client;

export * from '@prisma/client';
