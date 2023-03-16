import { dbInit } from './dbInit/dbInit';
import { Phone } from './dbInit/models/Phone';
import { PhoneItem } from './dbInit/models/PhoneItem';
import fs from 'fs';
import path from 'path';

let phones;

try {
  phones = fs.readFileSync(path.resolve('public', 'phones.json'), 'utf-8');

  phones = JSON.parse(phones);
} catch (error) {
  console.error(`Error message ${error}`);
}

let phoneItems = [];

try {
  const directoryPath = path.resolve('./public/phones/');
  const phoneItemsFiles = fs.readdirSync(directoryPath);

  phoneItems = phoneItemsFiles.map((phoneItemsFile) => {
    let phoneItemData;

    try {
      const filePath = path.resolve(`./public/phones/${phoneItemsFile}`);

      phoneItemData = fs.readFileSync(filePath, 'utf-8');
    } catch (error) {
      console.error(`Error message ${error}`);

      return;
    }

    return JSON.parse(phoneItemData);
  });
} catch (error) {
  console.error(`Error message ${error}`);
}

(async() => {
  dbInit();

  try {
    await Phone.sync({ force: true });
    await PhoneItem.sync({ force: true });
  } catch (error) {
    console.error(`Error message ${error}`);
  }

  for (const currentPhone of phones) {
    await Phone.create({
      category: currentPhone.category,
      phoneId: currentPhone.phoneId,
      itemId: currentPhone.itemId,
      name: currentPhone.name,
      fullPrice: currentPhone.fullPrice,
      price: currentPhone.price,
      screen: currentPhone.screen,
      capacity: currentPhone.capacity,
      color: currentPhone.color,
      ram: currentPhone.ram,
      year: currentPhone.year,
      image: currentPhone.image,
    });
  }

  for (const phoneItem of phoneItems) {
    await PhoneItem.create({
      id: phoneItem.id,
      namespaceId: phoneItem.namespaceId,
      name: phoneItem.name,
      capacityAvailable: phoneItem.capacityAvailable,
      capacity: phoneItem.capacity,
      priceRegular: phoneItem.priceRegular,
      priceDiscount: phoneItem.priceDiscount,
      colorsAvailable: phoneItem.colorsAvailable,
      color: phoneItem.color,
      images: phoneItem.images,
      description: phoneItem.description,
      screen: phoneItem.screen,
      resolution: phoneItem.resolution,
      processor: phoneItem.processor,
      ram: phoneItem.ram,
      camera: phoneItem.camera,
      zoom: phoneItem.zoom,
      cell: phoneItem.cell,
    });
  }

  console.log('synced');
})();
