const onCreated = require('./onCreated');
const onSuccess = require('./onSuccess');
const onError = require('./onError');
const onDeleted = require('./onDeleted');
const onUnathorized = require('./onUnathorized');
const onNotFound = require('./onNotFound');

module.exports = {
  onCreated,
  onSuccess,
  onError,
  onDeleted,
  onUnathorized,
  onNotFound,
};
