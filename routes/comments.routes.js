const express = require('express');
const { createComment, readComment, updateComment, deleteComment, countCommentsOnPost, countCommentsByUser } = require('../controllers/comment.controllers.js');


const router = express.Router();

router.route('/create').post(createComment);
router.route('/read').get(readComment);
router.route('/update').put(updateComment);
router.route('/delete').delete(deleteComment);
router.route('/postcomment').get(countCommentsOnPost);
router.route('/usercomment').get(countCommentsByUser);

module.exports = router;