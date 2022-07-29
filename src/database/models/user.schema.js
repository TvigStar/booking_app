'use strict';
exports.__esModule = true;
exports.UserModel = exports.UserSchema = void 0;
const mongoose_1 = require('mongoose');
const constants_1 = require('../../constants');
const uuid_1 = require('uuid');
exports.UserSchema = new mongoose_1.Schema({
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
    required: true
  },
  photoAvatar: {
    type: String
  },
  type: {
    type: String,
    required: true,
    default: constants_1.TypesEnum.USER
  },
  appointments: [{
    type: mongoose_1.Types.ObjectId,
    ref: 'Appointment'
  }]
});
exports.UserModel = (0, mongoose_1.model)(constants_1.TableNamesEnum.USER, exports.UserSchema);
