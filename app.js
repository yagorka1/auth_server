const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Auth', { useNewUrlParser: true,  useUnifiedTopology: true });

const app = express();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json())

// Routes
app.use('/users', require('./routes/users'))


// Start the server
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server listening at ${port}`);