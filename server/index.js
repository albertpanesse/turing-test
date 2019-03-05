const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8888;
const path = require('path');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../react-client/dist`));

const defaultRouter = require('./routes');
app.use('*', defaultRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});