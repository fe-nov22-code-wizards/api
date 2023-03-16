import { dbInit } from './dbInit/dbInit';
import { Phone } from './dbInit/models/Phone';
import { PhoneItem } from './dbInit/models/PhoneItem';

(async() => {
  dbInit();

  try {
    await Phone.sync({ alter: true });
    await PhoneItem.sync({ alter: true });
  } catch (error) {
    console.error(`Error message ${error}`);
  }

  console.log('synced');
})();
