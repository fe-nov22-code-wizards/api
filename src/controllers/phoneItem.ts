import * as phoneItemService from '../services/phoneItem';
import { Request, Response } from 'express';

export const getAll = async(req: Request, res: Response) => {
  try {
    const phones = await phoneItemService.getAll();

    res.send(phones);
  } catch (error) {
    res.sendStatus(400);
  }
};

export const getOne = async(req: Request, res: Response) => {
  const { phoneId } = req.params;

  try {
    const foundPhone = await phoneItemService.getById(phoneId);

    if (!foundPhone) {
      res.sendStatus(404);

      return;
    }

    res.send(phoneItemService.normalize(foundPhone));

    return foundPhone;
  } catch (error) {
    res.sendStatus(400);
  }
};
