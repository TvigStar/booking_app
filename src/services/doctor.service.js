'use strict';
exports.__esModule = true;
exports.doctorService = void 0;
const database_1 = require('../database');
const DoctorService = /** @class */ (function() {
  function DoctorService() {
  }
  DoctorService.prototype.create = function(doctor) {
    return database_1.DoctorModel.create([doctor]);
  };
  DoctorService.prototype.findById = function(id) {
    return database_1.DoctorModel.findById(id)
      .populate('appointmentsAccepted')
      .exec();
  };
  DoctorService.prototype.updateById = function(id, docToUpdate) {
    return database_1.DoctorModel.findByIdAndUpdate(id, docToUpdate).exec();
  };

  return DoctorService;
}());
exports.doctorService = new DoctorService();
