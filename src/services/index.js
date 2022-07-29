'use strict';
const __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) {k2 = k;}
  let desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) {k2 = k;}
  o[k2] = m[k];
}));
const __exportStar = (this && this.__exportStar) || function(m, exports) {
  for (const p in m) {if (p !== 'default' && !Object.prototype.hasOwnProperty.call(exports, p)) {__createBinding(exports, m, p);}}
};
exports.__esModule = true;
__exportStar(require('./doctor.service'), exports);
__exportStar(require('./user.service'), exports);
__exportStar(require('./appointment.service'), exports);
__exportStar(require('./reminder.service'), exports);
