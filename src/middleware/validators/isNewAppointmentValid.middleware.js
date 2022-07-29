'use strict';
exports.__esModule = true;
exports.checkIsNewAppointmentValidMiddleware = void 0;
const validators_1 = require('../../validators');
const checkIsNewAppointmentValidMiddleware = function(req, res, next) {
  const error = validators_1.newAppointmentValidator.validate(req.body).error;
  if (error) {
    return next(new Error(error.details[0].message));
  }
  next();
};
exports.checkIsNewAppointmentValidMiddleware = checkIsNewAppointmentValidMiddleware;
