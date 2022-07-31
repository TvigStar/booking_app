import { IUser } from '../interfaces';
import { UserModel } from '../database';
import { Types } from "mongoose";

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

  deleteById(_id: Types.ObjectId | string) {
    return UserModel.findByIdAndRemove(_id).exec();
  }

}

export const userService = new UserService();
