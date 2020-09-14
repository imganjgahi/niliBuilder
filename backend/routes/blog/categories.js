const express = require('express');
const router = express.Router();
const CategoriesController = require('../../controllers/blog/categoriesController');

// const passport = require('passport');

//Categories ROUTES START WHIT /Categories/
router.get('/', CategoriesController.getAllCategories);
router.get('/:id', CategoriesController.getCategoriesById);
router.get('/:id/products', CategoriesController.getAllCategoryProducts);
router.post('/', CategoriesController.createCategories);
router.put('/:id', CategoriesController.updateCategories);
router.delete('/:id', CategoriesController.deleteCategories);
module.exports = router;