var express = require('express');
const BaseController = require('../controllers/BaseController');
var router = express.Router();

/* GET home page. */
router.get('/', BaseController.index);

router.get('/login', Basecontroller.loginForm);


module.exports = router;
