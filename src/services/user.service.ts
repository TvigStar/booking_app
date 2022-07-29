import { IUser } from '../interfaces';
import { UserModel } from '../database';

class UserService{
  create(user: Partial<IUser>): Promise<IUser[]> {
    return UserModel.create([user]);
  }

  findUserById(id: string): Promise<IUser> {
    return UserModel.findById(id).exec();
  }

  updateById(id: string, user: Partial<IUser>): Promise<IUser> {
    return UserModel.findByIdAndUpdate(id, user).exec();
  }

}

export const userService = new UserService();
