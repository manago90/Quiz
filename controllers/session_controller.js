var userController = require('./user_controller.js');

exports.new = function(req, res) {
  var errors = req.session.errors || {};

  res.render('login', {errors : errors});
};

exports.create = function(req, res) {
  var login = req.body.login;

  userController.autenticar(login.user, login.password, function(error, user) {
    if (error) {
        req.session.errors = [{message: "ERROR: " + error.message}];
        res.redirect('/login');
    } else {
      req.session.user = {id: user.id, username: user.username};
      res.redirect(req.session.redir.toString());
    }
  })
};

exports.destroy = function(req, res) {
  delete req.session.user;
  res.redirect(req.session.redir.toString());
};

exports.loginRequired = function(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
};
