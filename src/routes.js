const express = require('express');

const routes = express.Router();
const userController = require('./controllers/user.controller');

routes.get('/users', userController.all);
routes.post('/users', userController.save);
routes.get('/users/:id', userController.one);
routes.delete('/users/:id', userController.delete);

module.exports = routes;
