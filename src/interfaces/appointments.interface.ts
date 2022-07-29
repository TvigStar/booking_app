import { Types } from 'mongoose';
import { IDoctor } from './doctor.interface';
import { IUser } from './user.interface';

export interface IAppointments {
  _id: Types.ObjectId;
  date: Date;
  user: string | IUser;
  doctor: string | IDoctor;
  active: boolean;
}
