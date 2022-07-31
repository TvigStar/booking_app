import { doctorService, userService } from '../services';
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
  async deleteDoctor(req: Request, res: Response, next: NextFunction){
    try{
      const {doctorId} = req.params;

      await doctorService.deleteById(doctorId)

      res.end()
    } catch (err){
      next(err)
    }
  }
}

export const doctorController = new DoctorController();
