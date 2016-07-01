var express = require('express');
var router = express.Router();
var data = require('../data/data.js');
var activedata = require('../logic/logic.js');
var user = require('../logic/user.js');

router.get('/:url', function(req, res, next) {
  if (req.params.url === "active_users"){
  res.json(activedata);}
  else if (req.params.url === "users"){
  res.json(data) ;}
});

router.get('/users/:id', function(req, res, next) {
  res.json(user(req.params.id));
});

router.get('/active_users/:id', function(req, res, next) {
  res.json(user(req.params.id));
});

module.exports = router;
