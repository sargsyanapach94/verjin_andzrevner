"use strict";

var express = require('express');
var app = express();
var routers = {};
var NoteRouter = express.Router();
routers.NoteRouter = NoteRouter;

var UsersRouter = express.Router();
routers.UsersRouter = UsersRouter;

require('./config.js')(app, express, routers);

require('../note/note_routes.js')(NoteRouter);
require('../users/users_routes.js')(UsersRouter);

module.exports = exports = app;