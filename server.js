const dotenv = require('dotenv');

dotenv.config();
const express = require('express');

const app = express();
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');

// Controllers
const tracksCtrl = require('./controllers/tracksCtrl');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

// Routes go here
app.post('/tracks', tracksCtrl.create);
app.get('/tracks', tracksCtrl.index);
app.get('/tracks/:id', tracksCtrl.show);
app.put('/tracks/:id', tracksCtrl.update);
app.delete('/tracks/:id', tracksCtrl.delete);

app.listen(3000, () => {
  console.log('The express app is ready!');
});
