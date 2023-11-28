import { Request, Response } from 'express';
import { userServices } from './users.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;
    console.log(user);
    const result = await userServices.createUserIntoDB(user);
    res.status(200).json({
      status: 'success',
      message: 'user is created Successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId: id } = req.params;

    const result = await userServices.getSingleUserFromDB(parseInt(id));
    res.status(200).json({
      status: 'success',
      message: 'user id is found Successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUsersFromDB();
    res.status(200).json({
      status: 'success',
      message: 'all users find successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const usersController = {
  createUser,
  getSingleUser,
  getAllUsers,
};
