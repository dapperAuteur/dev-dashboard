require('dotenv').config();
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const logger = require('morgan');
const userRoutes = require('./routes/user.route');
const express = require('express'),
  app = express();
(cors = require('cors')), (bodyParser = require('body-parser'));

const db = require('./models');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SECRET,
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    }),
    resave: false,
    saveUninitialized: false
  })
);

const PORT = process.env.PORT || 8081;

app.get('/', (req, res) => res.send('Hello World'));
app.use('/user', userRoutes);

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
