const express = require('express');
const bodyParser = require('body-parser');
const index = require('../routes/index.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

function makeHandlerAwareOfAsyncErrors(handler) {
	return async function(req, res, next) {
		try {
			await handler(req, res);
		} catch (error) {
			next(error);
		}
	};
}


app.use('/api/v1', index);


module.exports = app;