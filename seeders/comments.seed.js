const { CommentsModel } = require('../models/comments.model.js');
const sequelize = require('../sequelize/index.js');


async function reset() {
    console.log('Will rewrite the Postgres example database, adding some dummy data.');

    // await sequelize.sync({ force: true });

    await CommentsModel.create({
        "body": "Great insights, thank you." ,
        "user_id": "37bc54d5-d8ea-450d-8ce8-1a7dc58d5eb4",
        "post_id": "17b6147a-0ef2-4553-953b-645e860a1535"
    });

    console.log('Done!');
}

reset();