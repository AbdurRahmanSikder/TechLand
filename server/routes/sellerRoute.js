import express from 'express';
import {sellerLogin, isSellerAuth, logout } from '../controllers/sellerController.js';
import authSeller from '../middlewares/authSeller.js';

const sellerRoute = express();


sellerRoute.post('/login' , sellerLogin);
sellerRoute.get('/is-auth',authSeller,isSellerAuth);
sellerRoute.get('/logout',logout)

export default sellerRoute;