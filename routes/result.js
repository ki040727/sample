var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    var name = req.body.name;
    console.log("1111");
    console.log(name);
    console.log("2222");
    res.render('result', { name: req.body.name, tel_num: req.body.tel_num, phone : req.body.phone  });
});

module.exports = router;
