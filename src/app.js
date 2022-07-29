'use strict';
exports.__esModule = true;
exports.app = void 0;
const express_rate_limit_1 = require('express-rate-limit');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const mongoose = require('mongoose');
const config_1 = require('./config');
const routes_1 = require('./routes');
const routes_2 = require('./routes');
const cron_1 = require('./cron');
dotenv.config();
const serverRequestLimit = (0, express_rate_limit_1.default)({
  windowMs: config_1.config.serverRateLimits.period,
  max: config_1.config.serverRateLimits.maxRequests
});
const App = /** @class */ (function() {
  function App() {
    this.app = express();
    global.appRoot = path.resolve(process.cwd(), '../');
    this.app.use(morgan('dev'));
    this.app.use(helmet.default());
    this.app.use(serverRequestLimit);
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static(path.resolve(global.appRoot, 'public')));
    this.mountRoutes();
    this.setupDB();
    this.runJobs();
    this.app.use(this.customErrorHandler);
  }
  App.prototype.setupDB = function() {
    mongoose.connect(config_1.config.MONGODB_URL);
    const db = mongoose.connection;
    db.on('error', console.log.bind(console, 'MONGO ERROR'));
  };
  App.prototype.runJobs = function() {
    (0, cron_1.cronJobRun)();
  };
  App.prototype.customErrorHandler = function(err, req, res, next) {
    res
      .status(err.status)
      .json({
        message: err.message || 'Unknown Error',
        code: err.code
      });
  };
  App.prototype.mountRoutes = function() {
    this.app.use('/doctors', routes_1.doctorRouter);
    this.app.use('/users', routes_2.userRouter);
    this.app.use('/appointments', routes_1.appointmentRouter);
  };

  return App;
}());
exports.app = new App().app;
