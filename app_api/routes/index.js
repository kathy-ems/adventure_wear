var controller = require('../controllers');
var router = require('express').Router();

//Connect controller methods to their corresponding routes
router.get('/languages', controller.languages.get);

router.post('/languages', controller.languages.post);

// router.get('/webInterfaces', controller.webInterfaces.get);
//
// router.post('/webInterfaces', controller.webInterfaces.post);


module.exports = router;
