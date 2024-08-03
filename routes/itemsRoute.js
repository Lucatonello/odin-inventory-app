const express = require('express');
const router = express.Router();
const itemsController  = require('../controllers/itemsController');

router.get('/', itemsController.getCategories);
router.get('/:category/items', itemsController.getItems);

module.exports = router;