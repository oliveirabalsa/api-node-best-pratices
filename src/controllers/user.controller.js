/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
const connection = require('../_shared/database/database');
const {
  onSuccess, onCreated, onDeleted, onError, onUnathorized,
} = require('../_shared/handlers/index');

// const userService = require('../services/user.service');

class Controller {
  async all(req, res) {
    try {
      const users = await connection('users').select('*');

      return onSuccess(res, users);
    } catch (error) {
      // eslint-disable-next-line no-console
      onError(res, error.stack);
    }
  }

  async one(req, res) {
    try {
      const { id } = req.params;
      const user = await connection('users').select('*').where('id', id);

      return onSuccess(res, user);
    } catch (error) {
      // eslint-disable-next-line no-console
      onError(res, error.stack);
    }
  }

  async save(req, res) {
    try {
      const request = req.body;

      await connection('users').insert(request);

      return onCreated(res, 'User successfully created');
    } catch (error) {
      // eslint-disable-next-line no-console
      onError(res, error.stack);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      await connection('users').where('id', id).delete();

      onDeleted(res);
    } catch (error) {
      onError(res, error.stack);
    }
  }
}
module.exports = new Controller();
