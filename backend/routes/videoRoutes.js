const express = require('express');
const { generateVideo } = require('../controllers/videoController');

const router = express.Router();

// POST request to generate video
router.post('/generate', generateVideo);

module.exports = router;
