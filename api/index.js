require('dotenv').config();
const logger = require('morgan');
const express = require('express'),
  app = express();
(cors = require('cors')), (bodyParser = require('body-parser'));

const commentRouters = require('./routes/commentRoutes');
const issueRoutes = require('./routes/issueRoutes');
const tagRoutes = require('./routes/tagRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const update = require('./routes/update');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.use('/auth', authRoutes);
app.use('/update', update);
app.use('/comments', commentRouters);
app.use('/issues', issueRoutes);
app.use('/tags', tagRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 8081;

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
