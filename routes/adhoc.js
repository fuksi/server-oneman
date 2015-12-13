var express = require('express');
var router = express.Router();
var config = require('../custom_config');
var sprintf = require('sprintf-js').sprintf;
var unformattedSql = require('../unformatted_sql');

// Db connection setup
var mysql      = require('mysql');
var connection = mysql.createConnection(config.db);

/* GET users listing. */
router.get('/noCondition/:identifier', function(req, res, next) {
	var sql = sprintf(unformattedSql.adhoc.noCondition[req.params.identifier], "");
	connection.query(sql, function(err, rows, fields) {
	  if (err) {
	  	res.send(sql);
	  } else {
	  	res.jsonp(rows);	
	  }
	});
});

router.get('/withCondition/:identifier/:paramVal', function(req, res, next) {
	var sql = sprintf(unformattedSql.adhoc.withCondition[req.params.identifier], req.params.paramVal, "");
	connection.query(sql, function(err, rows, fields) {
	  if (err) {
	  	res.send(sql);
	  } else {
	  	res.jsonp(rows);	
	  }
	});
});

module.exports = router;
