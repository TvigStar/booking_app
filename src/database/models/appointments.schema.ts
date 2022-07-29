import { Document, Model, model, Schema } from 'mongoose';
import { IAppointments } from '../../interfaces';
import { TableNamesEnum } from '../../constants';

export type AppointmentsType = IAppointments & Document

export const AppointmentsSchema: Schema = new Schema<IAppointments>({
  user: {
    type: String,
    ref: TableNamesEnum.USER,
    required: true
  },
  doctor: {
    type: String,
    ref: TableNamesEnum.DOCTOR,
    required: true
  },
  active: {
    type: Boolean,
    default: false,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

export const AppointmentsModel: Model<AppointmentsType> = model<AppointmentsType>(
  TableNamesEnum.APPOINTMENTS,
  AppointmentsSchema);
