import { NextFunction, Request, Response } from 'express';
import { newDoctorValidator } from '../../validators';

export const checkIsNewDoctorValidMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const {error} = newDoctorValidator.validate(req.body);

    if (error) {
      return next(new Error(error.details[0].message));
    }
    next();
  } catch (err){
    next(err);
  }
};
