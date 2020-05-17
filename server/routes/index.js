const express = require('express');

const itemController = require('../controllers/items');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});
router.post('/', itemController.create);
router.get('/test', (req, res) => {
  res.send('this app works!!!');
});

module.exports = router;
