import { NextFunction, Request, Response } from 'express';
import rateLimit from 'express-rate-limit';
import * as express from 'express';
import * as dotenv from 'dotenv';
import * as morgan from 'morgan';
import * as helmet from 'helmet';
import * as path from 'path';
import * as mongoose from 'mongoose';
import { config } from './config';
import { appointmentRouter, doctorRouter } from './routes';
import { userRouter } from './routes';
import { cronJobRun } from './cron';
import * as fs from "fs";

dotenv.config();

const serverRequestLimit = rateLimit({
  windowMs: config.serverRateLimits.period,
  max: config.serverRateLimits.maxRequests
});

class App {
  public readonly app: express.Application = express();

  constructor() {
    (global as any).appRoot = path.resolve(process.cwd(), '../');

    const logsDir = path.resolve(__dirname, 'logs');

    fs.mkdirSync(logsDir, { recursive: true });

    this.app.use(morgan('dev'));
    this.app.use(helmet.default());
    this.app.use(serverRequestLimit);

    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));

    this.app.use(express.static(path.resolve((global as any).appRoot, 'public')));
    this.mountRoutes();
    this.setupDB();
    this.runJobs();
    this.app.use(this.customErrorHandler);
  }

  private setupDB(): void {
    mongoose.connect(config.MONGODB_URL);

    const db = mongoose.connection;
    db.on('error', console.log.bind(console, 'MONGO ERROR'));
  }

  private runJobs() {
    cronJobRun();
  }

  private customErrorHandler(err: any, req: Request, res: Response, next: NextFunction): void {
    res
      .status(err.status)
      .json({
        message: err.message || 'Unknown Error',
        code: err.code
      });
  }

  private mountRoutes(): void {
    this.app.use('/doctors', doctorRouter);
    this.app.use('/users', userRouter);
    this.app.use('/appointments', appointmentRouter);
  }
}

export const app = new App().app;

