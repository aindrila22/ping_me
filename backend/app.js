require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config/config');



const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(`${config.MONGO_URI}`);
const db = mongoose.connection;
db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('MongoDB connected!!!');
});

// Use routes
//app.use('/user', userRoutes);



app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});