const express = require('express');

const router = express.Router();
const authRoute = require('./pokemon.route');

const defaultRoutes = [
  {
    path: '/pokemon',
    route: authRoute,
  },
];

defaultRoutes.forEach(route => {
  router.use(route.path, route.route);
});

module.exports = router;
