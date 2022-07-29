import { NextFunction, Request, Response } from 'express';
import { newAppointmentValidator } from '../../validators';

export const checkIsNewAppointmentValidMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const {error} = newAppointmentValidator.validate(req.body);

  if (error) {
    return next(new Error(error.details[0].message));
  }
  next();
};
