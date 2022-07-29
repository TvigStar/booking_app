'use strict';
exports.__esModule = true;
exports.RegExpEnum = void 0;
exports.RegExpEnum = {
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  phone: new RegExp('^[+]*[0-9]{5,20}$')
};
