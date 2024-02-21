const { asyncHandler } = require("../utils/asyncHandler");
const { UsersModel } = require('../models/index.js');
 

const getUser = asyncHandler(async (req, res) => {
    const users = await UsersModel.findAll();
    if (!users) {
        return res.status(400).send("Users not exits in database.");
    }
    return res.status(200).json(users);
});

const createUser = asyncHandler(async (req, res) => {
    if (!req.body) {
        return res.status(400).send("can't access the body of request.")
    }
    const newUser = await UsersModel.create(req.body);
    return res.status(200).send(newUser);
});

const updateUser = asyncHandler(async (req, res) => {
    const userId = req.params.id;
    const [rowsaffected, [updateduser]] = await UsersModel.update(req.body, {
        where: {
           id: userId
        },
        returning: true
    })
    if (rowsaffected === 0) {
        return res.status(404).json({ error: `User with id ${userId} not found` });
    }
    return res.status(200).json(updateduser);
});

const deleteUser = asyncHandler(async (req, res) => {
    const userId = req.params.id;
    await UsersModel.destroy({
        where: {
            id: userId
        },
        returning: true
    }).then((result) => res.status(200).json({
        data: result,
        message:  `User Deleted Successfully with id: ${userId}`
    }))
    .catch((err) => res.status(400).send("can't Delete the user!!", err));
});

module.exports = { getUser, createUser, updateUser, deleteUser };   