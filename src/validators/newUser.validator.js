'use strict';
exports.__esModule = true;
exports.newUserValidator = void 0;
const Joi = require('joi');
const constants_1 = require('../constants');
exports.newUserValidator = Joi.object({
  name: Joi.string().trim().min(2).max(25).required(),
  email: Joi.string().trim().regex(constants_1.RegExpEnum.email).required(),
  phone: Joi.string().trim().regex(constants_1.RegExpEnum.phone),
  photoAvatar: Joi.string()
});
