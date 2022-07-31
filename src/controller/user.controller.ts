import { NextFunction, Request, Response } from 'express';
import { v1 as uuidv1 } from 'uuid';
import { userService } from '../services';

class UserController {
  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await userService.create({...req.body, regToken: uuidv1()});

      res.json(user);
    } catch (err) {
      next(err);
    }
  }
  async deleteUser(req: Request, res: Response, next: NextFunction){
    try{
      const {userId} = req.params;

      await userService.deleteById(userId)

      res.end()
    } catch (err){
      next(err)
    }
  }
}

export const userController = new UserController();
