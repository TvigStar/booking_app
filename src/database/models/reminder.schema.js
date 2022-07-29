'use strict';
exports.__esModule = true;
exports.ReminderModel = exports.ReminderSchema = void 0;
const mongoose_1 = require('mongoose');
const constants_1 = require('../../constants');
exports.ReminderSchema = new mongoose_1.Schema({
  appointment: {
    type: mongoose_1.Types.ObjectId,
    ref: constants_1.TableNamesEnum.APPOINTMENTS,
    required: true
  },
  timeType: {
    type: String,
    enum: [constants_1.TimeTypeEnum.DAY, constants_1.TimeTypeEnum.HOUR]
  }
});
exports.ReminderModel = (0, mongoose_1.model)(constants_1.TableNamesEnum.REMINDER, exports.ReminderSchema);
