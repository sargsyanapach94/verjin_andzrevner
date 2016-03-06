"use strict";

var Users = require('./users_model.js'),
    Q    = require('q');

module.exports = exports = {
  get: function (req, res, next) {
    var $promise = Q.nbind(Users.find, Users);

    $promise()
      .then(function (users) {
        res.json(users);
      })
       .fail(function (reason) {
        next(reason);
      });
  },

  post: function (req, res, next) {
    var users = req.body.users;
    var $promise = Q.nbind(Users.create, Users);
    $promise(users)
      .then(function (id) {
        res.send(id);
      })
      .fail(function (reason) {
        next(reason);
      });
  }
};