const { DataTypes } = require('sequelize');
const user = require('./models/user.js');
const sequelize = require('./sequelize/index.js');

const User = user(sequelize, DataTypes);

async function reset() {
	console.log('Will rewrite the Postgres example database, adding some dummy data.');

	await sequelize.sync({ force: false });

	await User.bulkCreate([
        {
          "firstName": "David",
          "lastName": "Anderson",
          "email": "david.anderson@example.com",
          "password": "david123"
        },
        {
          "firstName": "Emma",
          "lastName": "Thomas",
          "email": "emma.thomas@example.com",
          "password": "emma456"
        },
        {
          "firstName": "Liam",
          "lastName": "Hernandez",
          "email": "liam.hernandez@example.com",
          "password": "liam789"
        },
        {
          "firstName": "Ava",
          "lastName": "Young",
          "email": "ava.young@example.com",
          "password": "ava123"
        },
        {
          "firstName": "Noah",
          "lastName": "Scott",
          "email": "noah.scott@example.com",
          "password": "noah456"
        },
        {
          "firstName": "Mia",
          "lastName": "King",
          "email": "mia.king@example.com",
          "password": "mia789"
        },
        {
          "firstName": "Benjamin",
          "lastName": "Adams",
          "email": "benjamin.adams@example.com",
          "password": "benjamin123"
        },
        {
          "firstName": "Charlotte",
          "lastName": "Rivera",
          "email": "charlotte.rivera@example.com",
          "password": "charlotte456"
        },
        {
          "firstName": "Alexander",
          "lastName": "Lee",
          "email": "alexander.lee@example.com",
          "password": "alexander789"
        },
        {
          "firstName": "Madison",
          "lastName": "Perez",
          "email": "madison.perez@example.com",
          "password": "madison123"
        }
      ]
    );

	console.log('Done!');
}

reset();