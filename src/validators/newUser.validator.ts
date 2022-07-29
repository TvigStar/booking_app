import * as Joi from 'joi';
import { RegExpEnum } from '../constants';

export const newUserValidator = Joi.object({
  name: Joi.string().trim().min(2).max(25).required(),
  email: Joi.string().trim().regex(RegExpEnum.email).required(),
  phone: Joi.string().trim().regex(RegExpEnum.phone),
  photoAvatar: Joi.string()
});
