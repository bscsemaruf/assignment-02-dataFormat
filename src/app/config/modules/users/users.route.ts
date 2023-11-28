import express from 'express';
import { usersController } from './users.controller';

const router = express.Router();

router.post('/create-user', usersController.createUser);

router.get('/all-users', usersController.getAllUsers);
router.get('/:userId', usersController.getSingleUser);

export const usersRouter = router;
