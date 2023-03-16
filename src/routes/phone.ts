import * as phoneController from '../controllers/phone';
import express from 'express';

export const phoneRouter = express.Router();

phoneRouter.get('/', phoneController.getAll);
