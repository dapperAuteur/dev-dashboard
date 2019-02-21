require('dotenv').config();
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const logger = require('morgan');
const userRoutes = require('./routes/user.route');
const express = require('express'),
  app = express();
(cors = require('cors')), (bodyParser = require('body-parser'));

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SECRET,
    //set up for session persistance
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
      ttl: 2 * 24 * 60 * 60
    }),
    //forces session to be saved back to the session store,
    //even if the session was never modified during the request.
    resave: false,
    //if user does not add anything to session during visit
    //no session created
    saveUninitialized: false
  })
);

const PORT = process.env.PORT || 8081;

app.get('/', (req, res) => res.send('Hello World'));
app.use('/user', userRoutes);

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
