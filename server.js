const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');

const app = express();
const PORT = process.env.PORT || 4000;
const MONGODB_URI = 'mongodb://localhost:27017/book_db';


mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
    });


app.use(bodyParser.json());

app.use('/books', bookRoutes);


app.listen(4000, () => {
    console.log(`Server is running on port ${PORT}`);
});
