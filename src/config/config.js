'use strict';
exports.__esModule = true;
exports.config = void 0;
exports.config = {
  PORT: process.env.PORT || 9001,
  HOST: process.env.PORT || 'http://localhost',
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:3000',
  ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN || 'http://localhost:3000',
  CRON_JOB_PERIOD: process.env.CRON_JOB_PERIOD || '0 0 * * *',
  serverRateLimits: {
    period: 15 * 60 * 1000,
    maxRequests: 1000
  },
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://root:root7890@cluster0.igjog1f.mongodb.net/?retryWrites=true&w=majority'
};
