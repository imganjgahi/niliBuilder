const express = require('express');
const router = express.Router();
const PostController = require('../../controllers/blog/postsController');


//Posts ROUTES START WHIT /Posts/
router.get('/posts', PostController.getAllForClient);
router.get('/posts/:id', PostController.getItemByIdForGuest);
module.exports = router;