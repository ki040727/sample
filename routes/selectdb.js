var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var dbconfig   = require('../config/dbconfig.js');
var pool = mysql.createPool(dbconfig)

/* GET home page. */
router.get('/', function(req, res, next) {
    var userID = 'test03';
    var userName = 'X';
    var userAddress = 'X';
    pool.getConnection(function(err,con) {
        con.query("SELECT * FROM member where id = ?", [userID] ,
            function (error, result) {
                if (error) { //에러 발생시
                    console.log(error);
                    res.send('err : ' + error)
                } else { //실행 성공
                    userName = result[0].name; // DB에서 나온 결과 중에 0번째 row의 id 컬럼의 값을 가져와 설정합니다.
                    userAddress = result[0].addreass;
                    res.render('selectdb', {userID: userID, userName: userName, userAddress: userAddress});
                    con.release();
                }
            }
        )
    })

});

module.exports = router;
