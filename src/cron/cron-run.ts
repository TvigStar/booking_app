import * as cron from 'node-cron';
import { cronTimerHour } from './cronTimerHour';

export const cronJobRun = () => {
  cron.schedule('* * * * *', async () => {
    console.log('CRON RUN');
    await cronTimerHour();
    console.log('CRON STOP');
  });
};
