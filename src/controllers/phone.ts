import * as phoneService from '../services/phone';
import { Request, Response } from 'express';


export const getAll = async(req: Request, res: Response) => {
  try {
    const phones = await phoneService.getAll();

    res.send(phones);
  } catch(error) {
    res.sendStatus(400);
  }
};
