import { IDoctor } from '../interfaces';
import { DoctorModel } from '../database';

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

}

export const doctorService = new DoctorService();
