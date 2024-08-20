require('dotenv').config();
const config = require('config');
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const bookRoutes = require('./routes/books');

const app = express();

mongoose.connect(config.get('db'))
    .then(() => console.log('Connected to MongoDB...'))
    .catch((err) => console.log('Error connecting to MongoDB',err))

app.use(express.json());
app.use('/api/auth',authRoutes);
app.use('/api/users',userRoutes);
app.use('/api/books',bookRoutes);

const port = process.env.PORT || 5001;
const server = app.listen(port,() => console.log(`Listening on port ${port}`));

