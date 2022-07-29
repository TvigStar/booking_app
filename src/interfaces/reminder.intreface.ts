import { Types } from 'mongoose';
import { IAppointments } from './appointments.interface';

export interface IReminder {
  _id: Types.ObjectId;
  appointment: IAppointments,
  timeType: string
}
