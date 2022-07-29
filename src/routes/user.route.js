'use strict';
exports.__esModule = true;
exports.userRouter = void 0;
const express_1 = require('express');
const user_controller_1 = require('../controller/user.controller');
const middleware_1 = require('../middleware');
const router = (0, express_1.Router)();
router.post('/register', middleware_1.checkIsNewUserValidMiddleware, user_controller_1.userController.createUser);
exports.userRouter = router;
