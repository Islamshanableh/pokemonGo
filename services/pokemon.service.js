const httpStatus = require('http-status');
const { Prisma } = require('@prisma/client');
const { prisma } = require('./prisma.service');
const ApiError = require('../utils/ApiError');

exports.getPokemonById = async id => {
  const result = await prisma.pokemon.findUnique({
    where: {
      id,
    },
  });

  return result;
};

exports.createNewPokemon = async payload => {
  const result = await prisma.pokemon
    .create({
      data: payload,
    })
    .catch(e => {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (typeof e === 'string') e = JSON.parse(e);
        const errMeta = e?.meta;
        if (e.code === 'P2002') {
          if (
            errMeta &&
            errMeta?.target &&
            typeof errMeta.target === 'string'
          ) {
            const arr = errMeta.target
              .replaceAll('_', ' ')
              .replace('key', '')
              .concat('already exists')
              .split(' ');

            arr.shift();
            const msg = arr.join(' ');

            throw new ApiError(httpStatus.BAD_REQUEST, msg);
          }
        } else if (e?.meta?.target && typeof e.meta.target === 'string') {
          const msg = e?.meta?.target
            .replaceAll('_', ' ')
            .replace('key', '')
            .concat('already exists');
          throw new ApiError(httpStatus.BAD_REQUEST, msg);
        }
      }
    });

  return result;
};

exports.updatePokemonById = async (id, payload) => {
  const result = await prisma.pokemon
    .update({
      where: {
        id,
      },
      data: payload,
    })
    .catch(e => {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (typeof e === 'string') e = JSON.parse(e);
        const errMeta = e?.meta;
        if (e.code === 'P2002') {
          if (
            errMeta &&
            errMeta?.target &&
            typeof errMeta.target === 'string'
          ) {
            const arr = errMeta.target
              .replaceAll('_', ' ')
              .replace('key', '')
              .concat('already exists')
              .split(' ');

            arr.shift();
            const msg = arr.join(' ');

            throw new ApiError(httpStatus.BAD_REQUEST, msg);
          }
        } else if (e?.meta?.target && typeof e.meta.target === 'string') {
          const msg = e?.meta?.target
            .replaceAll('_', ' ')
            .replace('key', '')
            .concat('already exists');
          throw new ApiError(httpStatus.BAD_REQUEST, msg);
        }
      }
    });

  return result;
};

exports.deletePokemonById = async id => {
  const result = await prisma.pokemon.update({
    where: {
      id,
    },
    data: {
      isActive: false,
    },
  });

  return result;
};

exports.pokemonList = async (options, filter, search, sort) => {
  const [pokemon, recordsFiltered, recordsTotal] = await prisma.$transaction([
    prisma.pokemon.findMany({
      where: {
        AND: [
          {
            name: {
              equals: filter?.name,
            },
          },
          {
            type1: {
              equals: filter?.type1,
            },
          },
        ],
        OR: [
          {
            name: {
              contains: search ? search.trim() : '',
            },
          },
          {
            weather1: {
              contains: search ? search.trim() : '',
            },
          },
        ],
        isActive: true,
      },
      orderBy: sort
        ? {
            [sort.field]: sort.descAsc,
          }
        : {
            createdAt: 'desc',
          },
      skip: options.take * (options.skip - 1) || undefined,
      take: options.take || 10,
    }),
    prisma.pokemon.count({
      where: {
        AND: [
          {
            name: {
              equals: filter?.name,
            },
          },
          {
            type1: {
              equals: filter?.type1,
            },
          },
        ],
        OR: [
          {
            name: {
              contains: search ? search.trim() : '',
            },
          },
          {
            weather1: {
              contains: search ? search.trim() : '',
            },
          },
        ],
        isActive: true,
      },
    }),
    prisma.pokemon.count({
      where: {
        isActive: true,
      },
    }),
  ]);

  return { pokemon, recordsFiltered, recordsTotal };
};
