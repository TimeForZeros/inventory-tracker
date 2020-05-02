var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});
router.get('/test', (req, res) => {
  res.send('this app works!!!');
})

module.exports = router;
