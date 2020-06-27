const express = require('express');

const routes = express.Router();
const userController = require('./controllers/user.controller');

routes.get('/users', userController.list);

module.exports = routes;
