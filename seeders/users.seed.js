const sequelize = require('../sequelize/index.js');

const { UsersModel } = require('../models/users.model.js');


async function reset() {
    console.log('Will rewrite the Postgres example database, adding some dummy data.');

    await sequelize.sync({ force: false });

    await UsersModel.bulkCreate([
        {
            "user_name": "john_doe",
            "email": "john_doe@example.com",
            "password": "password123"
        },
        {
            "user_name": "jane_smith",
            "email": "jane_smith@example.com",
            "password": "securepassword456"
        },
        {
            "user_name": "alex_jones",
            "email": "alex_jones@example.com",
            "password": "p@ssw0rd789"
        },
        {
            "user_name": "emily_wilson",
            "email": "emily_wilson@example.com",
            "password": "mysecretp@ss"
        },
        {
            "user_name": "michael_brown",
            "email": "michael_brown@example.com",
            "password": "password2022"
        },
        {
            "user_name": "sarah_adams",
            "email": "sarah_adams@example.com",
            "password": "sarah1234"
        },
        {
            "user_name": "chris_carter",
            "email": "chris_carter@example.com",
            "password": "carter#2022"
        },
        {
            "user_name": "lisa_jackson",
            "email": "lisa_jackson@example.com",
            "password": "jackson567"
        },
        {
            "user_name": "ryan_miller",
            "email": "ryan_miller@example.com",
            "password": "miller#2023"
        },
        {
            "user_name": "amanda_clark",
            "email": "amanda_clark@example.com",
            "password": "amanda2024"
        }
    ]
    );

    console.log('Done!');
}

reset();