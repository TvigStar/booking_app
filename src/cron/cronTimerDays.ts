import { appointmentService, reminderService } from '../services';
import { TimeTypeEnum } from '../constants';
import * as fs from 'fs';
import * as path from 'path';
import { IExtendedAppointment } from '../interfaces';

export const cronTimerDays = async () => {
  const date = new Date();
  date.setDate(date.getDate() + 1);

  const appointments = await appointmentService.find({
    date: {
      $lt: date,
      $gt: new Date()
    },
    active: true
  }) as IExtendedAppointment[];

  const unnotifiedAppointments = [];

  for (const appointment of appointments) {
    const reminder = await reminderService.findOne({appointment, timeType: TimeTypeEnum.DAY});
    if (!reminder){
      unnotifiedAppointments.push(appointment);
    }
  }

  await Promise.all(
    unnotifiedAppointments.map((appointment)=>{
      return reminderService.create({appointment, timeType: TimeTypeEnum.DAY});
    })
  );

  const logPath = path.join(process.cwd(), 'src' ,'logs', 'logs.txt');

  unnotifiedAppointments.forEach((app)=> {
    fs.writeFile(logPath, `${new Date().toLocaleDateString()} | 
    Привет ${app.user.name}! Напоминаем что вы записаны к ${app.doctor.spec} завтра в  ${app.date}! \n`,
    (err) => {
      console.log(err);
    });
  });

};
