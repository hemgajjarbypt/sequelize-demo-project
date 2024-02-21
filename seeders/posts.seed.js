const sequelize = require('../sequelize/index.js');

const { PostsModel } = require('../models/posts.model.js');


async function reset() {
    console.log('Will rewrite the Postgres example database, adding some dummy data.');

    // await sequelize.sync({ force: false });

    await PostsModel.create({
        "title": "Advanced JavdijuhhaScript Concepts",
        "body": "Explore advanced topicijnne dfnews in JavaScript programming.",
        "user_id": "49342e1f-1353-416e-ac59-02971f62c893"
    });

    console.log('Done!');
}

reset();