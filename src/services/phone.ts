import { Phone } from '../dbInit/models/Phone';

export const getAll = async() => {
  return Phone.findAll();
};
