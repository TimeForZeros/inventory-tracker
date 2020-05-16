const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users');

/* ---------- Public Routes ---------- */
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);


/* ---------- Protected Routes ---------- */
// router.logout('/logout', usersCtrl.logout);



module.exports = router;