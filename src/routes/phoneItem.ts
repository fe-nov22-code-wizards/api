import * as phoneItemController from '../controllers/phoneItem';
import express from 'express';

export const phoneItemRouter = express.Router();

phoneItemRouter.get('/:phoneId', phoneItemController.getOne);
phoneItemRouter.get('/:phoneId/recommended', phoneItemController.getSimilar);
