'use strict';
exports.__esModule = true;
exports.reminderService = void 0;
const database_1 = require('../database');
const ReminderService = /** @class */ (function() {
  function ReminderService() {
  }
  ReminderService.prototype.findOne = function(findObject) {
    return database_1.ReminderModel.findOne(findObject)
      .exec();
  };
  ReminderService.prototype.create = function(reminder) {
    return database_1.ReminderModel.create([reminder]);
  };

  return ReminderService;
}());
exports.reminderService = new ReminderService();
