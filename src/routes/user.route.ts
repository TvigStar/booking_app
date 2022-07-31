import { Router } from 'express';
import { userController } from '../controller/user.controller';
import { checkIsNewUserValidMiddleware } from '../middleware';

const router = Router();

router.post('/register',
  checkIsNewUserValidMiddleware,
  userController.createUser);
router.delete('/:userId', userController.deleteUser)

export const userRouter = router;
