import { Request, Response } from 'express';

export const getImage = async(req: Request, res: Response) => {
  const { imgPath } = req.params;

  const normalizedPath = `${imgPath.slice(0, imgPath.length - 3)}png`;

  try {
    res.sendFile(normalizedPath);
  } catch (error) {
    res.sendStatus(400);
    console.error(error);
  }
};
