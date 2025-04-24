import { User, IUser } from "../models";

export class UserRepository {
  constructor() {}

  async createUser(data:any): Promise<IUser> {
    try {
      const response = await User.create(data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getByEmail(email:string): Promise<IUser | null> {
    try {
      const user = await User.findOne({ email: email }).select("+password");
      return user;
    } catch (error) {
      console.log("Error has occured while finding user");
      throw error;
    }
  }

}