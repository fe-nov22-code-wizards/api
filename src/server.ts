import express from 'express';
import cors from 'cors';
import { dbInit } from './dbInit/dbInit';

const PORT = 3000;
const server = express();

dbInit();

server.use(cors());

server.get('/', (req, res) => {
  res.send('<h1>Express App with Typescript</h1>');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
