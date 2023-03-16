import express from 'express';
import cors from 'cors';
import { dbInit } from './dbInit/dbInit';
import { phoneRouter } from './routes/phone';
import { phoneItemRouter } from './routes/phoneItem';
import { imgRouter } from './routes/img';

const PORT = process.env.PORT || 3000;
const server = express();

dbInit();

server.use(cors());
server.use(express.static('public'));

server.use('/phones', phoneRouter);
server.use('/phones', phoneItemRouter);
server.use('/img', imgRouter);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
