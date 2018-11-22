var express = require('express');
var router = express.Router();
var Heros = require('../models/heros.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/saveData', function(req,res,next){
	Heros.saveNew(req.query)
	console.log(req.query)
	res.render('heros' ,{data: req.query})
});
router.get('/getAllHeros', function(req,res,next){
	console.log(req.query)
	res.render('heros' ,{data: Heros.getAll()})
});

module.exports = router;
 