const express = require('express');
const { createPost, readPost, updatePost, deletedPost } = require('../controllers/post.controllers');


const router = express.Router();

router.route('/create').post(createPost);
router.route('/read').get(readPost);
router.route('/update').put(updatePost);
router.route('/delete').delete(deletedPost);

module.exports = router;