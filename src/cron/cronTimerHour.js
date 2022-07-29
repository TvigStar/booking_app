'use strict';
const __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P((resolve) => { resolve(value); }); }

  return new (P || (P = Promise))((resolve, reject) => {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const __generator = (this && this.__generator) || function(thisArg, body) {
  let _ = { label: 0, sent() { if (t[0] & 1) {throw t[1];}

    return t[1]; }, trys: [], ops: [] }; let f; let y; let t; let g;

  return g = { next: verb(0), throw: verb(1), return: verb(2) }, typeof Symbol === 'function' && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function(v) { return step([n, v]); }; }
  function step(op) {
    if (f) {throw new TypeError('Generator is already executing.');}
    while (_) {try {
      if (f = 1, y && (t = op[0] & 2 ? y.return : op[0] ? y.throw || ((t = y.return) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) {return t;}
      if (y = 0, t) {op = [op[0] & 2, t.value];}
      switch (op[0]) {
        case 0: case 1: t = op; break;
        case 4: _.label++;

          return { value: op[1], done: false };
        case 5: _.label++; y = op[1]; op = [0]; continue;
        case 7: op = _.ops.pop(); _.trys.pop(); continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
          if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
          if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
          if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
          if (t[2]) {_.ops.pop();}
          _.trys.pop(); continue;
      }
      op = body.call(thisArg, _);
    } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }}
    if (op[0] & 5) {throw op[1];}

    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
exports.__esModule = true;
exports.cronTimerHour = void 0;
const services_1 = require('../services');
const constants_1 = require('../constants');
const fs = require('fs');
const path = require('path');
const cronTimerHour = function() { return __awaiter(void 0, void 0, void 0, function() {
  let date; let appointments; let unnotifiedAppointments; let _i; let appointments_1; let appointment; let reminder; let logPath;

  return __generator(this, (_a) => {
    switch (_a.label) {
      case 0:
        date = new Date();
        date.setHours(date.getHours() + 2);

        return [4 /*yield*/, services_1.appointmentService.find({
          date: {
            $lt: date,
            $gt: new Date()
          },
          active: true
        })];
      case 1:
        appointments = _a.sent();
        console.log(appointments);
        unnotifiedAppointments = [];
        _i = 0, appointments_1 = appointments;
        _a.label = 2;
      case 2:
        if (!(_i < appointments_1.length)) {return [3 /*break*/, 5];}
        appointment = appointments_1[_i];

        return [4 /*yield*/, services_1.reminderService.findOne({ appointment })];
      case 3:
        reminder = _a.sent();
        if (!reminder) {
          unnotifiedAppointments.push(appointment);
        }
        _a.label = 4;
      case 4:
        _i++;

        return [3 /*break*/, 2];
      case 5: return [4 /*yield*/, Promise.all(unnotifiedAppointments.map((appointment) => {
        return services_1.reminderService.create({ appointment, timeType: constants_1.TimeTypeEnum.HOUR });
      }))];
      case 6:
        _a.sent();
        logPath = path.join(__dirname, 'src', 'logs', 'logs.txt');
        console.log(logPath);
        unnotifiedAppointments.forEach((app) => {
          fs.writeFile(logPath, ''.concat(new Date().toLocaleDateString(), ' | \n    \u041F\u0440\u0438\u0432\u0435\u0442 ').concat(app.user.name, '! \u0412\u0430\u043C \u0447\u0435\u0440\u0435\u0437 2 \u0447\u0430\u0441\u0430 \u043A ').concat(app.doctor.spec, ' \u0432 ').concat(app.date, '! \n'), (err) => {
            console.log(err);
          });
        });

        return [2 /*return*/];
    }
  });
}); };
exports.cronTimerHour = cronTimerHour;
