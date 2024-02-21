const { PostsModel, CommentsModel } = require('../models/index.js');
const { asyncHandler } = require('../utils/asyncHandler.js');

const createPost = asyncHandler(async (req, res) => {
    const title = req.body.title;
    const body = req.body.body;
    const user_id = req.body.uid;

    const post = await PostsModel.create({title, body, user_id});

    if (!post) {
        return res.status(400).json({message: `Can't Create the post`});
    }
    return res.status(200).json({data: post, message: "We Create the Post"});
});

const readPost = asyncHandler(async (req, res) => {
    const id = req.query.postId || 0;

    if (id !== 0) {
        const post = await PostsModel.findByPk(id);
        if (!post) {
            return res.status(400).json({message: `Post not exits in Database with id: ${id}`});
        }
        return res.status(200).json({data: post, message: "We find the Post"});
    }

    const posts = await PostsModel.findAll(); 
    if (!posts) {
        return res.status(400).json({message: `Posts not exits in Database!!`});
    }
    return res.status(200).json({data: posts, message: "We find the Posts.."});
});

const updatePost = asyncHandler(async (req, res) => {
    const post_id = req.query.id;
    const title = req.body.title;
    const body = req.body.body;

    const [rowsaffected, [updatedPost]] = await PostsModel.update({
        post_id, title, body
    },{
        where: {
            id: post_id
        }, 
        returning: true
    });

    if (rowsaffected === 0) {
        return res.status(400).json({error: `we can't update the post with id: ${post_id}`});
    }

    return res.status(200).json({data: updatedPost, message: "we update post successfully..."});
});

const deletedPost = asyncHandler(async (req, res) => {
    const id = req.query.id;

    await PostsModel.destroy({
        where: {
            id: id
        },
        returning: true
    }).then((pResult) => res.status(200).json({
            data: pResult,
            message:  `Comment and Post are Deleted Successfully with id: ${id}`
    })).catch((err) => res.status(400).json({   message: "can't Delete the post!!!",error:  err }));


    // await CommentsModel.destroy({
    //     where: {
    //         post_id: id
    //     }
    // }).then(async (cResult) => {
    //     await PostsModel.destroy({
    //         where: {
    //             id: id
    //         }
    //     }).then((pResult) => res.status(200).json({
    //         data: {Comment: cResult, Post: pResult},
    //         message:  `Comment and Post are Deleted Successfully with id: ${id}`
    //     })).catch((err) => res.status(400).send("can't Delete the post!!!", err));
    // }).catch((err) => res.status(400).send("can't Delete the Comments!!", err));
});


module.exports = {createPost, readPost, updatePost, deletedPost};