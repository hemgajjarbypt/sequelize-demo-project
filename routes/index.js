const express = require('express');

const router = express.Router();

const UserRouter = require('./users.routes.js');
const PostRouter = require('./posts.routes.js');
const CommentModel = require('./comments.routes.js');

router.use('/users', UserRouter);
router.use('/posts', PostRouter);
router.use('/comments', CommentModel);

module.exports = router;
