'use strict';
var __assign = (this && this.__assign) || function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (const p in s) {if (Object.prototype.hasOwnProperty.call(s, p))
      {t[p] = s[p];}}
    }

    return t;
  };

  return __assign.apply(this, arguments);
};
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
exports.doctorController = void 0;
const services_1 = require('../services');
const uuid_1 = require('uuid');
const DoctorController = /** @class */ (function() {
  function DoctorController() {
  }
  DoctorController.prototype.createDoctor = function(req, res, next) {
    return __awaiter(this, void 0, void 0, function() {
      let doctor; let err_1;

      return __generator(this, (_a) => {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2, , 3]);

            return [4 /*yield*/, services_1.doctorService.create(__assign(__assign({}, req.body), { regToken: (0, uuid_1.v1)() }))];
          case 1:
            doctor = _a.sent();
            res.json(doctor);

            return [3 /*break*/, 3];
          case 2:
            err_1 = _a.sent();
            next(err_1.message);

            return [3 /*break*/, 3];
          case 3: return [2 /*return*/];
        }
      });
    });
  };

  return DoctorController;
}());
exports.doctorController = new DoctorController();