require('dotenv').config();
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());

const posts = [
	{
		username: 'PeterDang',
		title: 'Post 1',
	},
	{
		username: 'Jim',
		title: 'Post 2',
	},
];

app.get('/posts', (req, res) => {
	res.json(posts);
});

app.post('/login', authenticateToken, (req, res) => {
	//Authenticate User
	const username = req.body.username;
	const user = { name: username };

	const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
	res.json({ accessToken: accessToken });
});

function authenticateToken(req, res, nex) {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];
	if (token == null) {
		/* 
			401 Unauthorized:
				Use when the authentication is required and has filed or has not yet been provided.
				The response must include a WWW-Authnticate header field containing a challenge applicable to the 
				request resource
		*/
		return res.sendStatus(401);
	}

	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
		/*
			403 Forbidden:
				The request contained valid data and was understood by the server, but the server is refusing action.
				This may be due to the user not having the necessary permissions for a resource or needing an account of
				some sort, or attempting a prohibited action.
		*/
		if (err) {
			return res.sendStatus(403);
		}
		req.user = user;
		next();
	});
}
app.listen(3000);
