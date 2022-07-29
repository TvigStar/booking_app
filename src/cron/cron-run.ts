import * as cron from 'node-cron';
import { cronTimerHour } from './cronTimerHour';
import { cronTimerDays } from './cronTimerDays';

export const cronJobRun = () => {
  cron.schedule('* * * * *', async () => {
    console.log('CRON RUN');
    await cronTimerHour();
    await cronTimerDays();
    console.log('CRON STOP');
  });
};
