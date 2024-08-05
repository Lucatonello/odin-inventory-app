const express = require('express');
const router = express.Router();
const itemsController  = require('../controllers/itemsController');

router.get('/', itemsController.getCategories);

router.get('/:category/items', itemsController.getItems);

router.get('/add-category', itemsController.addCategoryGet);
router.post('/', itemsController.addCategoryPost);

router.get('/:category/add-item', itemsController.addItemGet);
router.post('/add-item', itemsController.addItemPost);

module.exports = router;