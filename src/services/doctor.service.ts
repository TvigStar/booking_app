import { IDoctor } from '../interfaces';
import { DoctorModel, UserModel } from '../database';
import { Types } from "mongoose";

class DoctorService {
  create(doctor: Partial<IDoctor>): Promise<IDoctor[]> {
    return DoctorModel.create([doctor]);
  }

  findById(id: string) {
    return DoctorModel.findById(id)
      .populate('appointmentsAccepted')
      .exec();
  }

  updateById(id: string, docToUpdate: Partial<IDoctor>): Promise<IDoctor> {
    return DoctorModel.findByIdAndUpdate(id, docToUpdate).exec();
  }

  deleteById(id: Types.ObjectId | string) {
    return DoctorModel.findByIdAndRemove(id).exec();
  }
}

export const doctorService = new DoctorService();
