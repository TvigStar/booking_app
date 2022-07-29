'use strict';
exports.__esModule = true;
exports.newDoctorValidator = void 0;
const Joi = require('joi');
const constants_1 = require('../constants');
exports.newDoctorValidator = Joi.object({
  name: Joi.string().trim().min(2).max(25).required(),
  email: Joi.string().trim().regex(constants_1.RegExpEnum.email).required(),
  phone: Joi.string().trim().regex(constants_1.RegExpEnum.phone).required(),
  spec: Joi.string().default('therapist'),
  photoAvatar: Joi.string()
});
