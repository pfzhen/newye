var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : 'gqq123..',
  database : 'item'
});
/* GET home page. */
router.post('/list', function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*")
  connection.query("SELECT * FROM zy WHERE name LIKE '%"+req.body.ss+"%' OR title LIKE '%"+req.body.ss+"%'",function (err,rows) {
    res.send(rows)
  })
});

module.exports = router;