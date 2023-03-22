import * as phoneService from '../services/phone';
import { Request, Response } from 'express';

export const getAll = async(req: Request, res: Response) => {
  const { page = 1, perPage = 24, sort = '' } = req.query;

  try {
    const phones = await phoneService.getAll(
      Number(page),
      Number(perPage),
      String(sort),
    );

    res.send(phones);
  } catch (error) {
    res.sendStatus(400);
  }
};

export const getNew = async(req: Request, res: Response) => {
  try {
    const phones = await phoneService.getNew();

    res.send(phones);
  } catch (error) {
    res.sendStatus(400);
  }
};

export const getHotPrices = async(req: Request, res: Response) => {
  try {
    const phones = await phoneService.getAll();
    const bigDiscountPhone = [...phones.phones]
      .sort((phoneA, phoneB) => {
        const previousDiscount = phoneA.fullPrice - phoneA.price;
        const currentDiscount = phoneB.fullPrice - phoneB.price;

        return currentDiscount - previousDiscount;
      })
      .slice(0, 10);

    res.send(bigDiscountPhone);
  } catch (error) {
    res.sendStatus(400);
  }
};
