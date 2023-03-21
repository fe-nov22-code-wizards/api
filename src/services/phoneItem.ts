import { PhoneItem } from '../dbInit/models/PhoneItem';
import { PhoneItemType } from '../types/PhoneItem';

export const normalize = (phoneItem: PhoneItemType) => {
  const copyPhoneItem = { ...phoneItem };

  return copyPhoneItem;
};

export const getAll = async() => {
  return PhoneItem.findAll();
};

export const getById = async(phoneId: string) => {
  const phone = await PhoneItem.findByPk(phoneId);

  return phone;
};

export const getSimilar = async(phoneId: string) => {
  try {
    const currentPhone = await PhoneItem.findByPk(phoneId);

    if (currentPhone === null) {
      return;
    }

    const currentPrice = +currentPhone.priceRegular;

    const allPhones = await getAll();
    const filteredPhones = allPhones.filter(
      (phone) =>
        currentPrice >= +phone.priceRegular - 100 &&
        currentPrice <= +phone.priceRegular + 100,
    );

    return filteredPhones;
  } catch (error) {
    console.error(error);
  }
};
