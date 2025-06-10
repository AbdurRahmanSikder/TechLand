import express from 'express';
const userRoute = express();
import { register,login, isAuth, logout } from '../controllers/userController.js';
import authUser from '../middlewares/authUser.js';

userRoute.post('/register' , register);
userRoute.post('/login' , login);
userRoute.get('/is-auth',authUser,isAuth);
userRoute.get('/logout',logout)

export default userRoute;