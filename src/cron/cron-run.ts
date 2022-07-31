import * as cron from 'node-cron';
import { cronTimerHour } from './cronTimerHour';
import { cronTimerDays } from './cronTimerDays';

export const cronJobRun = () => {
  console.log(process.env);
  if (process.env.NODE_ENV !== 'test') {
    cron.schedule('* * * * *', async () => {
      await console.log('CRON RUN');
      await cronTimerHour();
      await cronTimerDays();
      console.log('CRON STOP');
    });
  }
};
