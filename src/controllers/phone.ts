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
      console.error(`Error is ${error}`);
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
        sizeValue,
      );

      res.send(phones);
    } catch (error) {
      res.sendStatus(400);
    }
  }
};

export const getNew = async(req: Request, res: Response) => {
  try {
    const phones = await phoneService.getAll();
    const newestPhones = phones.filter((phone) => +phone.year >= 2019);

    res.send(newestPhones);
  } catch (error) {
    res.sendStatus(400);
  }
};

export const getHotPrices = async(req: Request, res: Response) => {
  try {
    const phones = await phoneService.getAll();
    const bigDiscountPhone = [...phones]
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
