import { Router } from 'express';
import { appointmentController } from '../controller';
import { checkIsNewAppointmentValidMiddleware } from '../middleware';

const router = Router();

router.post('/reserve',
  checkIsNewAppointmentValidMiddleware,
  appointmentController.createAppointment);
router.patch('/confirm', appointmentController.acceptAppointment);
export const appointmentRouter = router;
