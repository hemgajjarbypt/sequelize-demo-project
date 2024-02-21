const express = require('express');
const { getUser, createUser, updateUser, deleteUser } = require('../controllers/user.controllers.js');

const router = express.Router();

router.route('/getUser').get(getUser);
router.route('/register').post(createUser);
router.route('/update/:id').put(updateUser);
router.route('/delete/:id').delete(deleteUser);

module.exports = router;
