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

app.post('/users', async (req, res) => {
	try {
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(req.body.password, salt);
		const user = { name: req.body.name, password: hashedPassword };

		users.push(user);

		//201 Created: The request has been fulfilled, resulting in the creation of a new resource
		res.status(201).send();
	} catch (error) {
		// 500 Internal Server Error: A generic error message
		res.status(500).send();
	}
});

app.post('/users/login', async (req, res) => {
	const user = users.find((user) => user.name === req.body.name);
	if (user === null) {
		res.status(400).send('Cannot find user');
	}

	try {
		if (await bcrypt.compare(req.body.password, user.password)) {
			res.send('Success');
		} else {
			res.send('Not Allowed');
		}
	} catch (error) {}
});

app.listen(3000);
