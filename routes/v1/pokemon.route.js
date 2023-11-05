const express = require('express');

const validate = require('../../middlewares/validate');

const router = express.Router();
const { pokemonController } = require('../../controllers');
const { pokemonValidation } = require('../../validations');

router
  .route('/')
  .get(
    validate(pokemonValidation.getPokemonById),
    pokemonController.getPokemonById,
  )
  .post(
    validate(pokemonValidation.createNewPokemon),
    pokemonController.createNewPokemon,
  )
  .put(
    validate(pokemonValidation.updatePokemonById),
    pokemonController.updatePokemonById,
  )
  .delete(
    validate(pokemonValidation.deletePokemonById),
    pokemonController.deletePokemonById,
  );

router
  .route('/list')
  .post(validate(pokemonValidation.pokemonList), pokemonController.pokemonList);

module.exports = router;
