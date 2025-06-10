import express from 'express'
import {getAllOrders, getUserOrders, placeOrderCOD} from '../controllers/orderController.js'
import authUser from '../middlewares/authUser.js'
import authSeller from '../middlewares/authSeller.js';

const orderRoute = express.Router();

orderRoute.post('/cod' , placeOrderCOD);
orderRoute.get('/user' , authUser, getUserOrders);
orderRoute.get('/seller' , authSeller ,getAllOrders);

export default orderRoute;