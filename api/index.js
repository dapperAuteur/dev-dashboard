require('dotenv').config();
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const logger = require('morgan');
const express = require('express'),
  app = express();
(cors = require('cors')), (bodyParser = require('body-parser'));

const commentRouters = require('./routes/commentRoutes');
const issueRoutes = require('./routes/issueRoutes');
const tagRoutes = require('./routes/tagRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SECRET_KEY,
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

// start example route
const cb0 = function(req, res, next) {
  console.log('CB0');
  next();
};

const cb1 = function(req, res, next) {
  console.log('CB1');
  next();
};

app.get(
  '/example/d',
  [cb0, cb1],
  function(req, res, next) {
    console.log('the response will be sent by the next function...');
    next();
  },
  function(req, res) {
    res.send('Hello from D!');
  }
);

// end example routes

app.use('/auth', authRoutes);
app.use('/comments', commentRouters);
app.use('/issues', issueRoutes);
app.use('/tags', tagRoutes);
app.use('/user', userRoutes);
// app.use('/user', userRoutes); // to be used by admins to manage users

const PORT = process.env.PORT || 8081;

app.get('/', (req, res) => res.send('Hello World'));

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
