import * as imgController from '../controllers/img';
import express from 'express';

export const imgRouter = express.Router();

imgRouter.get('/:imgPath', imgController.getImage);
