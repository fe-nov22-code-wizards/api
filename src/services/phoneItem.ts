import { PhoneItem } from '../dbInit/models/PhoneItem';
import { PhoneItemType } from '../types/PhoneItem';

export const normalize = (phoneItem: PhoneItemType) => {
  const copyPhoneItem = {...phoneItem};

  return copyPhoneItem;
};

export const getAll = async() => {
  return PhoneItem.findAll();
};

export const getById = async(phoneId: string) => {
  const phone = await PhoneItem.findByPk(phoneId);

  return phone;
};
