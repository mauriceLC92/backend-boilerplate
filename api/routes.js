const express = require('express');
const router = express.Router();

const domain = require('../app.name/http').default;

router.use(domain);

module.exports = router;
