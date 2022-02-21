const express = require('express');
const router = express.Router();

const mainControllers= require("../controllers/mainControllers");

/* GET login page. */
router.get('/login', mainControllers.login);

module.exports = router;
