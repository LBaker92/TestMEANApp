const express = require('express');
const router = express.Router();

const login = require('./controllers/login-controller');
const signup = require('./controllers/signup-controller');

router.use('/v1', login);
router.use('/v1', signup);

module.exports = router;
