var express = require('express');
var router = express.Router();
var data = require('../data/data.js');
var activedata = require('../logic/logic.js');
var user = require('../logic/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/users', function(req, res, next) {
  res.json(data);
});
router.get('/active_users', function(req, res, next) {
  res.json(activedata);
});

router.get('/users/:id', function(req, res, next) {
  res.json(user(req.params.id));
});

router.get('/active_users/:id', function(req, res, next) {
  res.json(user(req.params.id));
});

module.exports = router;
