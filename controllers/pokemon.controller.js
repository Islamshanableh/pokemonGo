const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

const pick = require('../utils/pick');

const { pokemonService } = require('../services');

exports.getPokemonById = catchAsync(async (req, res) => {
  const { id } = pick(req.query, ['id']);
  const result = await pokemonService.getPokemonById(id);
  res.status(httpStatus.OK).send({ result });
});

exports.createNewPokemon = catchAsync(async (req, res) => {
  const payload = req.body;
  const result = await pokemonService.createNewPokemon(payload);

  res.status(httpStatus.CREATED).send(result);
});

exports.updatePokemonById = catchAsync(async (req, res) => {
  const { id } = pick(req.query, ['id']);
  const payload = req.body;
  const result = await pokemonService.updatePokemonById(id, payload);
  res.status(httpStatus.OK).send({ result });
});

exports.deletePokemonById = catchAsync(async (req, res) => {
  const { id } = pick(req.query, ['id']);
  const result = await pokemonService.deletePokemonById(id);
  res.status(httpStatus.OK).send({ result });
});

exports.pokemonList = catchAsync(async (req, res) => {
  const options = pick(req.query, ['skip', 'take']);
  const { filter, search, sort } = pick(req.body, ['filter', 'search', 'sort']);
  const { pokemon, recordsFiltered, recordsTotal } =
    await pokemonService.pokemonList(options, filter, search, sort);

  res.status(httpStatus.OK).send({
    recordsTotal,
    recordsFiltered,
    data: pokemon,
  });
});
