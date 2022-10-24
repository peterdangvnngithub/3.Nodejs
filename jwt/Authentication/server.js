const express = require('express');
const app = express();
// A library to help you hash passwords
const bcrypt = require('bcrypt');

/* 
    NEED express.json() && express.urlencoded() for POST and PUT requests,
    because in both these requests you are sending data(in the form of some data object),
    Express.json(): method inbuild in express to recognize the incoming Request Object as a JSON Object.
    This method is called as a middleware in your application using the code: app.use(express.json())
*/
app.use(express.json());

const users = [];

app.get('/users', (req, res) => {
	res.json(users);
});

app.post('/users', (req, res) => {
	const user = { name: req.body.name, password: req.body.password };
	users.push(user);
	//201 Created: The request has been fulfilled, resulting in the creation of a new resource
	res.status(201).send();
});

app.listen(3000);
