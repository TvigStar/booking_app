'use strict';
exports.__esModule = true;
exports.appointmentService = void 0;
const database_1 = require('../database');
const AppointmentsService = /** @class */ (function() {
  function AppointmentsService() {
  }
  AppointmentsService.prototype.createAppointment = function(appointment) {
    return database_1.AppointmentsModel.create(appointment);
  };
  AppointmentsService.prototype.findById = function(id) {
    return database_1.AppointmentsModel.findById(id)
      .populate('doctor')
      .populate('user')
      .exec();
  };
  AppointmentsService.prototype.find = function(findObject) {
    return database_1.AppointmentsModel.find(findObject)
      .populate('user')
      .populate('doctor')
      .exec();
  };
  AppointmentsService.prototype.updateById = function(id, appToUpdate) {
    return database_1.AppointmentsModel.findByIdAndUpdate(id, appToUpdate).exec();
  };
  AppointmentsService.prototype.deleteById = function(id) {
    return database_1.AppointmentsModel.findByIdAndDelete(id).exec();
  };

  return AppointmentsService;
}());
exports.appointmentService = new AppointmentsService();
