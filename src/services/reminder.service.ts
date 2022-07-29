import { FilterQuery } from 'mongoose';
import { IReminder } from '../interfaces';
import { ReminderModel } from '../database';

class ReminderService{
  findOne(findObject: FilterQuery<IReminder>) {
    return ReminderModel.findOne(findObject)
      .exec();
  }

  create(reminder: Partial<IReminder>){
    return ReminderModel.create([reminder]);
  }
}

export const reminderService = new ReminderService();
