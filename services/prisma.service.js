const { PrismaClient, Prisma } = require('@prisma/client');

exports.prisma = new PrismaClient();

exports.prismaBase = Prisma;
