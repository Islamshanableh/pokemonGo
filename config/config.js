const path = require('path');
const Joi = require('joi');

// eslint-disable-next-line no-unused-expressions
process.env.NODE_ENV === 'development'
  ? require('dotenv').config({ path: path.join(__dirname, '../.env') })
  : require('dotenv').config({
      path: path.join(__dirname, `../.env.${process.env.NODE_ENV}`),
    });

const envVarsSchema = Joi.object()
  .keys({
    NODE_ENV: Joi.string()
      .valid('production', 'development', 'qa', 'staging')
      .required(),
    PORT: Joi.number().default(3000).description('app port'),
    APP_NAME: Joi.string().required().description('app name'),
    HOST: Joi.string().required().description('app host'),
    DATABASE_URL: Joi.string().required().description('database url'),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  appName: envVars.APP_NAME,
  host: envVars.HOST,
};
