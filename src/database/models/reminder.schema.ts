import { Document, Model, model, Schema, Types } from 'mongoose';
import { TableNamesEnum, TimeTypeEnum } from '../../constants';
import { IReminder } from '../../interfaces';

export type ReminderType = IReminder & Document

export const ReminderSchema: Schema = new Schema<IReminder>({
  appointment: {
    type: Types.ObjectId,
    ref: TableNamesEnum.APPOINTMENTS,
    required: true
  },
  timeType: {
    type: String,
    enum: [TimeTypeEnum.DAY, TimeTypeEnum.HOUR]
  }
});

export const ReminderModel: Model<ReminderType> = model<ReminderType>(
  TableNamesEnum.REMINDER,
  ReminderSchema);
