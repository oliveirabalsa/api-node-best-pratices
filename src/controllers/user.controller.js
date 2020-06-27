/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
const connection = require('../_shared/database/database');
const {
  onSuccess, onCreated, onDeleted, onError, onUnathorized,
} = require('../_shared/handlers/index');

// const userService = require('../services/user.service');

class Controller {
  async list(req, res) {
    try {
      const user = await connection('users').select('*');

      return res.json(user);
    } catch (error) {
      // eslint-disable-next-line no-console
      res.status(400).json({ message: error.stack });
    }
  }
}
module.exports = new Controller();
