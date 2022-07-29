'use strict';
exports.__esModule = true;
exports.checkIsNewUserValidMiddleware = void 0;
const validators_1 = require('../../validators');
const checkIsNewUserValidMiddleware = function(req, res, next) {
  const error = validators_1.newUserValidator.validate(req.body).error;
  if (error) {
    return next(new Error(error.details[0].message));
  }
  next();
};
exports.checkIsNewUserValidMiddleware = checkIsNewUserValidMiddleware;
