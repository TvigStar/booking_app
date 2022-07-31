import { Router } from 'express';
import { appointmentController } from '../controller';
import { checkIsNewAppointmentValidMiddleware } from '../middleware';

const router = Router();

router.post('/reserve',
  checkIsNewAppointmentValidMiddleware,
  appointmentController.createAppointment);
router.patch('/confirm', appointmentController.acceptAppointment);
router.delete('/:appointmentId', appointmentController.deleteAppointment );
export const appointmentRouter = router;
