var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var dbconfig   = require('../config/dbconfig.js');
var pool = mysql.createPool(dbconfig)

/* GET home page. */
router.get('/', function(req, res, next) {
    pool.getConnection(function(err,con) {
        con.query("SELECT * FROM member",
            function (error, result) {
                if (error) { //에러 발생시
                    res.send('err : ' + error)
                } else { //실행 성공
                    res.render('selectdb2', {data: result});
                    con.release();
                }
            }
        )
    })

});

module.exports = router;
