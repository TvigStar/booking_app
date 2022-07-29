'use strict';
exports.__esModule = true;
exports.AppointmentsModel = exports.AppointmentsSchema = void 0;
const mongoose_1 = require('mongoose');
const constants_1 = require('../../constants');
exports.AppointmentsSchema = new mongoose_1.Schema({
  user: {
    type: String,
    ref: constants_1.TableNamesEnum.USER,
    required: true
  },
  doctor: {
    type: String,
    ref: constants_1.TableNamesEnum.DOCTOR,
    required: true
  },
  active: {
    type: Boolean,
    default: false,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});
exports.AppointmentsModel = (0, mongoose_1.model)(constants_1.TableNamesEnum.APPOINTMENTS, exports.AppointmentsSchema);
