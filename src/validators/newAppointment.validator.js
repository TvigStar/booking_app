'use strict';
exports.__esModule = true;
exports.newAppointmentValidator = void 0;
const Joi = require('joi');
exports.newAppointmentValidator = Joi.object({
  date: Joi.date().required().max(new Date().setDate(new Date().getDate() + 30)).min('now'),
  userId: Joi.string().required(),
  doctorId: Joi.string().required()
});
