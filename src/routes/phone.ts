import * as phoneController from '../controllers/phone';
import express from 'express';

export const phoneRouter = express.Router();

phoneRouter.get('/', phoneController.getAll);
phoneRouter.get('/new', phoneController.getNew);
phoneRouter.get('/discount', phoneController.getHotPrices);
