import * as phoneService from '../services/phone';
import { Request, Response } from 'express';

export const getAll = async(req: Request, res: Response) => {
  const { page, size } = req.query;

  let pageValue: number;
  let sizeValue: number;

  if (!page && !size) {
    try {
      const phones = await phoneService.getAll();
  
      res.send(phones);
    } catch (error) {
      res.sendStatus(400);
    }
  } else {
    if (!page) {
      pageValue = 1;
    } else {
      pageValue = +page;
    }
  
    if (!size) {
      sizeValue = 16;
    } else {
      sizeValue = +size;
    }
  
    try {
      const phones = await phoneService.getAllWithPagination(
        pageValue, 
        sizeValue
      );
  
      res.send(phones);
    } catch (error) {
      res.sendStatus(400);
    }
  }
};
