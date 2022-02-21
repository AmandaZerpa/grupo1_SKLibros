const express = require('express');
const router = express.Router();
const genreApiController = require("../../controllers/api/genreApiController");

router.get("/", genreApiController.genre);

module.exports = router