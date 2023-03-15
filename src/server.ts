import express from 'express';

const PORT = 3000;
const server = express();

server.get('/', (req, res) => {
  res.send('<h1>Express App with Typescript</h1>');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});