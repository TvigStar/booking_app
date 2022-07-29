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
exports.appointmentController = void 0;
const services_1 = require('../services');
const errors_1 = require('../errors');
const constants_1 = require('../constants');
const AppointmentController = /** @class */ (function() {
  function AppointmentController() {
  }
  AppointmentController.prototype.createAppointment = function(req, res, next) {
    return __awaiter(this, void 0, void 0, function() {
      let _a; let doctorId; let userId; let date_1; let doctor; let dateAppointments; let user; let appointment; let err_1;

      return __generator(this, (_b) => {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 4, , 5]);
            _a = req.body, doctorId = _a.doctorId, userId = _a.userId, date_1 = _a.date;

            return [4 /*yield*/, services_1.doctorService.findById(doctorId)];
          case 1:
            doctor = _b.sent();
            if (!doctor) {
              return [2 /*return*/, next(new errors_1.ErrorHandler(constants_1.ResponseStatusCodesEnum.NOT_FOUND, errors_1.customErrors.NOT_FOUND_DOCTOR.message))];
            }
            dateAppointments = doctor.appointmentsAccepted.filter((app) => {
              const reservedTime = new Date(app.date).setHours(0, 0, 0, 0);
              const newAppointmentTime = new Date(date_1).setHours(0, 0, 0, 0);

              return reservedTime === newAppointmentTime;
            });
            if (dateAppointments.length >= 3) {
              return [2 /*return*/, next(new errors_1.ErrorHandler(constants_1.ResponseStatusCodesEnum.BAD_REQUEST, errors_1.customErrors.BAD_REQUEST_TIME_RESERVED.message))];
            }

            return [4 /*yield*/, services_1.userService.findUserById(userId)];
          case 2:
            user = _b.sent();
            if (!user) {
              return [2 /*return*/, next(new errors_1.ErrorHandler(constants_1.ResponseStatusCodesEnum.NOT_FOUND, errors_1.customErrors.NOT_FOUND_USER.message))];
            }

            return [4 /*yield*/, services_1.appointmentService.createAppointment({
              doctor: doctor._id, user: user._id,
              date: date_1
            })];
          case 3:
            appointment = _b.sent();
            res.json(appointment);

            return [3 /*break*/, 5];
          case 4:
            err_1 = _b.sent();
            next(err_1.message);

            return [3 /*break*/, 5];
          case 5: return [2 /*return*/];
        }
      });
    });
  };
  AppointmentController.prototype.acceptAppointment = function(req, res, next) {
    return __awaiter(this, void 0, void 0, function() {
      let _a; let appointmentId; let accept; let appointment_1; let doctor; let user; let reservedAppointments; let dateAppointments; let err_2;

      return __generator(this, (_b) => {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 7, , 8]);
            _a = req.body, appointmentId = _a.appointmentId, accept = _a.accept;

            return [4 /*yield*/, services_1.appointmentService.findById(appointmentId)];
          case 1:
            appointment_1 = _b.sent();
            if (!appointment_1) {
              return [2 /*return*/, next(new errors_1.ErrorHandler(constants_1.ResponseStatusCodesEnum.NOT_FOUND, errors_1.customErrors.NOT_FOUND_APPOINTMENT.message))];
            }
            if (appointment_1.active) {
              return [2 /*return*/, next(new errors_1.ErrorHandler(constants_1.ResponseStatusCodesEnum.BAD_REQUEST, errors_1.customErrors.BAD_REQUEST_APPOINTMENT_ACTIVE.message))];
            }
            doctor = appointment_1.doctor, user = appointment_1.user;

            return [4 /*yield*/, services_1.appointmentService.find({ doctor, active: true })];
          case 2:
            reservedAppointments = _b.sent();
            if (new Date(appointment_1.date).getTime() < new Date().getTime()) {
              return [2 /*return*/, next(new Error('appointment has already passed'))];
            }
            dateAppointments = reservedAppointments.filter((app) => {
              const reservedTime = new Date(app.date).setHours(0, 0, 0, 0);
              const newAppointmentTime = new Date(appointment_1.date).setHours(0, 0, 0, 0);

              return reservedTime === newAppointmentTime;
            });
            if (dateAppointments.length >= 3) {
              return [2 /*return*/, next(new errors_1.ErrorHandler(constants_1.ResponseStatusCodesEnum.BAD_REQUEST, errors_1.customErrors.BAD_REQUEST_TIME_RESERVED.message))];
            }
            if (!accept) {return [3 /*break*/, 4];}
            doctor.appointmentsAccepted.push(appointment_1._id);
            user.appointments.push(appointment_1._id);

            return [4 /*yield*/, Promise.all([
              services_1.userService.updateById(user._id, { appointments: user.appointments }),
              services_1.appointmentService.updateById(appointment_1._id, { active: true }),
              services_1.doctorService.updateById(doctor._id, { appointmentsAccepted: doctor.appointmentsAccepted })
            ])];
          case 3:
            _b.sent();

            return [3 /*break*/, 6];
          case 4: return [4 /*yield*/, services_1.appointmentService.deleteById(appointment_1._id)];
          case 5:
            _b.sent();
            _b.label = 6;
          case 6:
            res.json('OK');

            return [3 /*break*/, 8];
          case 7:
            err_2 = _b.sent();
            next(err_2.message);

            return [3 /*break*/, 8];
          case 8: return [2 /*return*/];
        }
      });
    });
  };

  return AppointmentController;
}());
exports.appointmentController = new AppointmentController();
