'use strict';
exports.__esModule = true;
exports.checkIsNewDoctorValidMiddleware = void 0;
const validators_1 = require('../../validators');
const checkIsNewDoctorValidMiddleware = function(req, res, next) {
  try {
    const error = validators_1.newDoctorValidator.validate(req.body).error;
    if (error) {
      return next(new Error(error.details[0].message));
    }
    next();
  }
  catch (err) {
    next(err);
  }
};
exports.checkIsNewDoctorValidMiddleware = checkIsNewDoctorValidMiddleware;
