const Joi = require('joi');

exports.getPokemonById = {
  query: Joi.object().keys({
    id: Joi.number().positive().integer().required(),
  }),
};

exports.createNewPokemon = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    pokedexNumber: Joi.number().positive().integer().required(),
    imgName: Joi.string(),
    generation: Joi.number(),
    evolutionStage: Joi.string(),
    evolved: Joi.number(),
    familyID: Joi.number(),
    crossGen: Joi.number(),
    type1: Joi.string().valid(
      'bug',
      'dark',
      'dragon',
      'electric',
      'fairy',
      'fighting',
      'fire',
      'flying',
      'ghost',
      'grass',
      'ground',
      'ice',
      'normal',
      'poison',
      'psychic',
      'rock',
      'steel',
      'water',
    ),
    type2: Joi.string().valid(
      'bug',
      'dark',
      'dragon',
      'electric',
      'fairy',
      'fighting',
      'fire',
      'flying',
      'ghost',
      'grass',
      'ground',
      'ice',
      'normal',
      'poison',
      'psychic',
      'rock',
      'steel',
      'water',
    ),
    weather1: Joi.string(),
    weather2: Joi.string(),
    statTotal: Joi.number(),
    ATK: Joi.number(),
    DEF: Joi.number(),
    STA: Joi.number(),
    legendary: Joi.number(),
    aquireable: Joi.number(),
    spawns: Joi.number(),
    regional: Joi.number(),
    raidable: Joi.number(),
    hatchable: Joi.number(),
    shiny: Joi.number(),
    nest: Joi.number(),
    new: Joi.number(),
    notGettable: Joi.number(),
    futureEvolve: Joi.number(),
    CP40: Joi.number(),
    CP39: Joi.number(),
  }),
};

exports.updatePokemonById = {
  body: Joi.object().keys({
    name: Joi.string(),
    pokedexNumber: Joi.number().positive().integer(),
    imgName: Joi.string(),
    generation: Joi.number(),
    evolutionStage: Joi.string(),
    evolved: Joi.number(),
    familyID: Joi.number(),
    crossGen: Joi.number(),
    type1: Joi.string().valid(
      'bug',
      'dark',
      'dragon',
      'electric',
      'fairy',
      'fighting',
      'fire',
      'flying',
      'ghost',
      'grass',
      'ground',
      'ice',
      'normal',
      'poison',
      'psychic',
      'rock',
      'steel',
      'water',
    ),
    type2: Joi.string().valid(
      'bug',
      'dark',
      'dragon',
      'electric',
      'fairy',
      'fighting',
      'fire',
      'flying',
      'ghost',
      'grass',
      'ground',
      'ice',
      'normal',
      'poison',
      'psychic',
      'rock',
      'steel',
      'water',
    ),
    weather1: Joi.string(),
    weather2: Joi.string(),
    statTotal: Joi.number(),
    ATK: Joi.number(),
    DEF: Joi.number(),
    STA: Joi.number(),
    legendary: Joi.number(),
    aquireable: Joi.number(),
    spawns: Joi.number(),
    regional: Joi.number(),
    raidable: Joi.number(),
    hatchable: Joi.number(),
    shiny: Joi.number(),
    nest: Joi.number(),
    new: Joi.number(),
    notGettable: Joi.number(),
    futureEvolve: Joi.number(),
    CP40: Joi.number(),
    CP39: Joi.number(),
  }),
  query: Joi.object().keys({
    id: Joi.number().positive().integer().required(),
  }),
};

exports.deletePokemonById = {
  query: Joi.object().keys({
    id: Joi.number().positive().integer().required(),
  }),
};

exports.pokemonList = {
  query: Joi.object().keys({
    skip: Joi.number().positive().integer().required(),
    take: Joi.number().positive().integer().required(),
  }),
  body: Joi.object().keys({
    filter: Joi.object().keys({
      name: Joi.string(),
      type1: Joi.string().valid(
        'bug',
        'dark',
        'dragon',
        'electric',
        'fairy',
        'fighting',
        'fire',
        'flying',
        'ghost',
        'grass',
        'ground',
        'ice',
        'normal',
        'poison',
        'psychic',
        'rock',
        'steel',
        'water',
      ),
    }),
    search: Joi.string(),
    sort: Joi.object().keys({
      field: Joi.string().required(),
      descAsc: Joi.string().valid('desc', 'asc').default('asc'),
    }),
  }),
};
