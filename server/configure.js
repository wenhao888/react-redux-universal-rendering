var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var render = require("./render");

var configure = express();

// view engine setup
configure.set('views', path.join(__dirname, 'templates'));
configure.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//configure.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
configure.use(logger('dev'));
configure.use(bodyParser.json());
configure.use(bodyParser.urlencoded({ extended: false }));
configure.use(cookieParser());
configure.use(express.static(path.join(__dirname, '/../public')));



configure.use(render);


// catch 404 and forward to error handler
configure.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



// error handlers

// development error handler
// will print stacktrace
if (configure.get('env') === 'development') {
  configure.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
configure.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = configure;
