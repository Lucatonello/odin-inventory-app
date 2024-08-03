const express = require('express');
const router = express.Router();
const getCategories = require('../controllers/itemsController');
const db = require('../db/pool')

router.get('/', getCategories);

module.exports = router;