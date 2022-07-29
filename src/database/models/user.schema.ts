import { Document, Model, model, Schema, Types } from 'mongoose';
import { IUser } from '../../interfaces';
import { TableNamesEnum, TypesEnum } from '../../constants';
import { v1 as uuidv1 } from 'uuid';

export type UserType = IUser & Document

export const UserSchema: Schema = new Schema<IUser>({
  _id: {
    type: String,
    default: uuidv1
  },
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
    required: true
  },
  photoAvatar: {
    type: String
  },
  type: {
    type: String,
    required: true,
    default: TypesEnum.USER
  },
  appointments: [{
    type: Types.ObjectId,
    ref: 'Appointment'
  }]
});

export const UserModel: Model<UserType> = model<UserType>(TableNamesEnum.USER, UserSchema);
