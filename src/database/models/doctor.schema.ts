import { Document, Model, model, Schema, Types } from 'mongoose';
import { IDoctor } from '../../interfaces';
import { TableNamesEnum, TypesEnum } from '../../constants';
import { v1 as uuidv1 } from 'uuid';

export type DoctorType = IDoctor & Document

export const DoctorSchema: Schema = new Schema<IDoctor>({
  _id: {
    type: String,
    default: uuidv1 },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  regToken: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    unique: true,
    required: false
  },
  spec: {
    type: String,
    required: true,
    default: 'therapist'
  },
  photoAvatar: {
    type: String
  },
  type: {
    type: String,
    required: true,
    default: TypesEnum.DOCTOR
  },
  free: {
    type: Boolean,
    default: true
  },
  appointmentsAccepted: [{
    type: Types.ObjectId,
    ref: TableNamesEnum.APPOINTMENTS
  }]
});

export const DoctorModel: Model<DoctorType> = model<DoctorType>(TableNamesEnum.DOCTOR, DoctorSchema);
