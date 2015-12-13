var express = require('express');
var router = express.Router();
var config = require('../custom_config');
var sprintf = require('sprintf-js').sprintf;
var unformattedSql = require('../unformatted_sql');

// Db connection setup
var mysql      = require('mysql');
var connection = mysql.createConnection(config.db);

/* GET users listing. */
router.get('/all/:subject', function(req, res, next) {
	var sql = sprintf(unformattedSql.simple.all[req.params.subject], "");
	connection.query(sql, function(err, rows, fields) {
	  if (err) {
	  	res.send(sql);
	  } else {
	  	res.jsonp(rows);	
	  }
	});
});

router.get('/single/:subject/:subjectId', function(req, res, next) {
	var sql = sprintf(unformattedSql.simple.single[req.params.subject], req.params.subjectId, "");
	connection.query(sql, function(err, rows, fields) {
	  if (err) {
	  	res.send(sql);
	  } else {
	  	res.jsonp(rows);	
	  }
	});
});

module.exports = router;
