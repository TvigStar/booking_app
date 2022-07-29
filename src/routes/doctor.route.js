'use strict';
exports.__esModule = true;
exports.doctorRouter = void 0;
const express_1 = require('express');
const controller_1 = require('../controller');
const middleware_1 = require('../middleware');
const router = (0, express_1.Router)();
router.post('/register', middleware_1.checkIsNewDoctorValidMiddleware, controller_1.doctorController.createDoctor);
exports.doctorRouter = router;
