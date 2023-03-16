import { Request, Response } from 'express';

export const getImage = async(req: Request, res: Response) => {
  const { imgPath } = req.params;

  try {
    res.sendFile(imgPath);
  } catch (error) {
    res.sendStatus(400);
  }
};
