'use strict';
exports.__esModule = true;
exports.userService = void 0;
const database_1 = require('../database');
const UserService = /** @class */ (function() {
  function UserService() {
  }
  UserService.prototype.create = function(user) {
    return database_1.UserModel.create([user]);
  };
  UserService.prototype.findUserById = function(id) {
    return database_1.UserModel.findById(id).exec();
  };
  UserService.prototype.updateById = function(id, user) {
    return database_1.UserModel.findByIdAndUpdate(id, user).exec();
  };

  return UserService;
}());
exports.userService = new UserService();
