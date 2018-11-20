require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
// all these consts are importing the packages that are listed in package.json
// theres no point in making any of these variables for a package that hasnt yet been installed
// so if you have something here ^ that is not listed udner dependencies in package.json,
// that means you need to run `npm install --save ${thatThing}`


const session     = require('express-session');
const passport    = require('passport');


require('./config/passport-stuff');

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/to-do-list', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';



app.use(session({
  secret: "our-passport-local-strategy-app",
  resave: true,
  saveUninitialized: true
}));
// this block of code configures and activates a session in express

app.use(passport.initialize());
// this line 'turns on' the passport package
app.use(passport.session());
//this line connects passport to the session you created


app.use(function(req, res, next) {
  res.locals.theUser = req.user;
  next();
});
// this chunk of code is not from passport, we made this us
// what we would like to do is somthing like this
// app.locals.theUser = req.user
// because we want to pass in the user to every single view in the entire app however, 
// app.locals syntax does not work because we only have access to req.user if we have req. and there's no req in this file
// instead we do app.use which is a middleware funciton, that automatically has req inside it, and then we do the same thing with different syntax 


const index = require('./routes/index');
app.use('/', index);

const taskRoutes = require('./routes/task-routes');
app.use('/', taskRoutes);

const userRoutes = require('./routes/user-routes');
app.use('/', userRoutes)



module.exports = app;
