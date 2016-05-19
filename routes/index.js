var express = require('express');
var router = express.Router();

/* sendIndex will always render to index.ejs for all the paths in the indexPaths
then in the node routes/index.js, you see that for each
angular path we send it to the root of the site
then index.ejs will load angular, then angular
routes will grab the url and pick the right controller and template
*/

/* GET home page. */
var sendIndex = function sendIndex(req, res) {
  res.render('index', { title: 'Title: Adventure Wear' });
};

// var indexPaths = ['/', '/chrome', '/chrome/:product/:recipe/:phase',
// '/chrome/new', '/cellculture','/cellculture/:product',
// '/cellculture/lots/:lotNum'];
var indexPaths = ['/', '/list'];
var path;

for (var i = indexPaths.length - 1; i >= 0; i--) { // eslint-disable-line
  path = indexPaths[i];
  router.get(path, sendIndex);
}


module.exports = router;
