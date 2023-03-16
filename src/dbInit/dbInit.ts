import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { Phone } from './models/Phone';
import { PhoneItem } from './models/PhoneItem';

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;

export const dbInit = () => {
  const sequelize = new Sequelize(URL, {
    models: [Phone, PhoneItem],
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
  });

  return sequelize;
};
