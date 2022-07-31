import { Router } from 'express';
import { doctorController } from '../controller';
import { checkIsNewDoctorValidMiddleware } from '../middleware';

const router = Router();

router.post('/register',
  checkIsNewDoctorValidMiddleware,
  doctorController.createDoctor);
router.delete('/:doctorId', doctorController.deleteDoctor)
export const doctorRouter = router;
