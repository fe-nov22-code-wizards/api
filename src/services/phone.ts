import { Phone } from '../dbInit/models/Phone';

export const getAll = async() => {
  const phones = await Phone.findAll();

  return phones;
};

export const getAllWithPagination = async(page: number, size: number) => {
  const offset = (page - 1) * size;

  const phones = await Phone.findAll({
    offset,
    limit: size,
  });

  const total = await Phone.count();

  return {
    phones,
    info: {
      total,
      page,
      size,
    },
  };
};
