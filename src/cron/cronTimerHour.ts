import { appointmentService, reminderService } from '../services';
import { TimeTypeEnum } from '../constants';
import * as fs from 'fs';
import * as path from 'path';
import { IExtendedAppointment } from '../interfaces';

export const cronTimerHour = async () => {
  const date = new Date();
  date.setHours(date.getHours() + 2);

  const appointments = await appointmentService.find({
    date: {
      $lt: date,
      $gt: new Date()
    },
    active: true
  }) as IExtendedAppointment[];

  const unnotifiedAppointments = [];

  for (const appointment of appointments) {
    const reminder = await reminderService.findOne({appointment, timeType: TimeTypeEnum.HOUR});
    if (!reminder){
      unnotifiedAppointments.push(appointment);
    }
  }

  await Promise.all(
    unnotifiedAppointments.map((appointment)=>{
      return reminderService.create({appointment, timeType: TimeTypeEnum.HOUR});
    })
  );

  const logPath = path.join(process.cwd(), 'src' ,'logs', 'logs.txt');

  unnotifiedAppointments.forEach((app)=> {
    fs.appendFile(logPath, `${new Date().toLocaleDateString()} | 
    Привет ${app.user.name}! Вам через 2 часа к ${app.doctor.spec} в ${app.date}! \n`,
    (err) => {
      if (err) {console.log(err);}
    });
  });

};
