require('dotenv').config();

const express = require('express');
const json = require('body-parser').json;
const cors = require('cors');

const mongoose = require('mongoose');

const v1 = require('./v1/v1');

const app = express();
const port = parseInt(process.env.SERVICE_PORT);

app.use(cors());
app.use(json());

app.use('/api', v1);

mongoose.connect(process.env.DB_CONN, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error'));
db.once('open', () => {
  console.log('mongodb connection established.');
})

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
