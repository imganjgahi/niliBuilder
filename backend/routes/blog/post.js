const express = require('express');
const router = express.Router();
const PostController = require('../../controllers/blog/postsController');


//Posts ROUTES START WHIT /Posts/
router.get('/', PostController.getAll);
router.get('/:id', PostController.getItemById);
router.post('/', PostController.createItem);
router.put('/:id', PostController.updateItem);
router.delete('/:id', PostController.deleteItem);
module.exports = router;