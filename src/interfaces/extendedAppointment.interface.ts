import { Types } from 'mongoose';
import { IDoctor } from './doctor.interface';
import { IUser } from './user.interface';

export interface IExtendedAppointment {
  _id: Types.ObjectId;
  date: Date;
  user: IUser;
  doctor: IDoctor;
  active: boolean;
}
