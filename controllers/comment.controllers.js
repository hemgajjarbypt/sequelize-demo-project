const { CommentsModel } = require('../models/comments.model.js');
const { asyncHandler } = require('../utils/asyncHandler.js');

const createComment = asyncHandler(async (req, res) => {
    const body = req.body.body;
    const user_id = req.body.uid;
    const post_id = req.body.pid;

    const post = await CommentsModel.create({body, user_id, post_id});

    if (!post) {
        return res.status(400).json({message: `Can't Create the Comment`});
    }
    return res.status(200).json({data: post, message: "We Create the Comment..."});
});

const readComment = asyncHandler(async (req, res) => {
    const id = req.query.commentId || 0;

    if (id !== 0) {
        const comment = await CommentsModel.findByPk(id, {attributes: ['id', 'body', 'user_id', 'post_id', 'created_at', 'update_at']});
        if (!comment) {
            return res.status(400).json({message: `Comment not exits in Database with id: ${id}`});
        }
        return res.status(200).json({data: comment, message: "We find the Comment"});
    }

    const comments = await CommentsModel.findAll(); 
    if (!comments) {
        return res.status(400).json({message: `Comments not exits in Database!!`});
    }
    return res.status(200).json({data: comments, message: "We find the Comments..."});
});

const updateComment = asyncHandler(async (req, res) => {
    const comment_id = req.query.id;
    const body = req.body.body;

    const [rowsaffected, [updatedComment]] = await CommentsModel.update({
        comment_id, body
    },{
        where: {
            id: comment_id
        }, 
        returning: true
    });

    if (rowsaffected === 0) {
        return res.status(400).json({error: `we can't update the comment with id: ${comment_id}`});
    }

    return res.status(200).json({data: updatedComment, message: "we update comment successfully..."});
});

const deleteComment = asyncHandler(async (req, res) => {
    const { id } = req.query;

    await CommentsModel.destroy({
        where: {
            id: id
        },
        returning: true
    }).then((result) => res.status(200).json({
        data: result,
        message:  `Comment Deleted Successfully with id: ${id}`
    }))
    .catch((err) => res.status(400).send("can't Delete the comment!!", err));
});

const countCommentsOnPost = asyncHandler(async (req, res) => {
    const id = req.query.pid;

    const {count, rows } = await CommentsModel.findAndCountAll({
        where: {
            post_id: id
        }
    })
    
    if (count === 0) {
        return res.status(400).send("Can't find any Comments on this Post...");
    }

    return res.status(200).json({count: count, data: rows});
});

const countCommentsByUser = asyncHandler(async (req, res) => {
    const id = req.query.uid;

    const {count, rows} = await CommentsModel.findAndCountAll({
        where: {
            user_id: id
        }
    })

    if (count === undefined) {
        return res.status(400).send("Can't find any Comments by this User...");
    }

    return res.status(200).json({count: count, data: rows});
});

module.exports = {createComment, readComment, updateComment, deleteComment, countCommentsByUser, countCommentsOnPost};