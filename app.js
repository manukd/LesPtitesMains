var createError = require('http-errors');
var express = require('express');
const session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sess = session;
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var searchHero = require('./routes/searchHero');
var connect = require('./routes/connect');
var inscription = require('./routes/inscription');
var agence = require('./routes/agence');
var profil = require('./routes/profil');
var connexion = require('./routes/connexion');
var accueil = require('./routes/accueil');
var report = require('./routes/report');
var threats = require('./routes/threats');


var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/searchhero', searchHero);
app.use('/connect', connect);
app.use('/inscription', inscription);
app.use('/agence', agence);
app.use('/profils', profil);
app.use('/connexion', connexion);
app.use('/accueil', accueil);
app.use('/crime', report);
app.use('/threats', threats);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
