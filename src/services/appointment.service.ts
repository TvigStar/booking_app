import { IAppointments } from '../interfaces';
import { AppointmentsModel } from '../database';
import { FilterQuery, Types } from 'mongoose';

class AppointmentsService {
  createAppointment(appointment: Partial<IAppointments>): Promise<IAppointments> {
    return AppointmentsModel.create(appointment);
  }

  findById(id: string): Promise<IAppointments> {
    return AppointmentsModel.findById(id)
      .populate('doctor')
      .populate('user')
      .exec();
  }

  find(findObject: FilterQuery<IAppointments>) {
    return AppointmentsModel.find(findObject)
      .populate('user')
      .populate('doctor')
      .exec();
  }

  updateById(id: string | Types.ObjectId, appToUpdate: Partial<IAppointments>): Promise<IAppointments> {
    return AppointmentsModel.findByIdAndUpdate(id, appToUpdate).exec();
  }

  deleteById(id: Types.ObjectId | string) {
    return AppointmentsModel.findByIdAndDelete(id).exec();
  }
}

export const appointmentService = new AppointmentsService();
