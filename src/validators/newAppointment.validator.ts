import * as Joi from 'joi';

export const newAppointmentValidator = Joi.object({
  date: Joi.date().required().max(new Date().setDate(new Date().getDate() + 30)).min('now').iso(),
  userId: Joi.string().required(),
  doctorId: Joi.string().required()
});
