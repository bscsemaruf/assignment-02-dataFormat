import { Users } from './users.interface';
import { UsersModel } from './users.model';

const createUserIntoDB = async (user: Users) => {
  const result = await UsersModel.create(user);
  return result;
};

const getSingleUserFromDB = async (userId: number) => {
  // console.log(typeof id, { id });
  const result = await UsersModel.findOne({ userId });
  console.log({ result });
  return result;
};

const getAllUsersFromDB = async () => {
  const result = await UsersModel.aggregate([
    { $project: { userName: 1, fullName: 1, age: 1, email: 1, address: 1 } },
  ]);
  return result;
};

export const userServices = {
  createUserIntoDB,
  getSingleUserFromDB,
  getAllUsersFromDB,
};
