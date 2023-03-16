import { Phone } from '../dbInit/models/Phone';

export const getAll = async() => {
  const phones = await Phone.findAll();

  return phones;
};
