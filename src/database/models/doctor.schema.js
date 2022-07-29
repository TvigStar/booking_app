'use strict';
exports.__esModule = true;
exports.DoctorModel = exports.DoctorSchema = void 0;
const mongoose_1 = require('mongoose');
const constants_1 = require('../../constants');
const uuid_1 = require('uuid');
exports.DoctorSchema = new mongoose_1.Schema({
  _id: {
    type: String,
    default: uuid_1.v1
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  regToken: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    unique: true,
    required: false
  },
  spec: {
    type: String,
    required: true,
    default: 'therapist'
  },
  photoAvatar: {
    type: String
  },
  type: {
    type: String,
    required: true,
    default: constants_1.TypesEnum.DOCTOR
  },
  free: {
    type: Boolean,
    default: true
  },
  appointmentsAccepted: [{
    type: mongoose_1.Types.ObjectId,
    ref: constants_1.TableNamesEnum.APPOINTMENTS
  }]
});
exports.DoctorModel = (0, mongoose_1.model)(constants_1.TableNamesEnum.DOCTOR, exports.DoctorSchema);
