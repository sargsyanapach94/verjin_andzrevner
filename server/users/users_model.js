"use strict";

var mongoose = require('mongoose');

var UsersSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },

  fullName:  String,
});

module.exports = exports = mongoose.model('users', UsersSchema);