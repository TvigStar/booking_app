import { doctorService } from '../services';
import { NextFunction, Request, Response } from 'express';
import { v1 as uuidv1 } from 'uuid';

class DoctorController {
  async createDoctor(req: Request, res: Response, next: NextFunction) {
    try {
      const doctor = await doctorService.create({...req.body, regToken: uuidv1()});

      res.json(doctor);
    } catch (err) {
      next(err.message);
    }
  }
}

export const doctorController = new DoctorController();
