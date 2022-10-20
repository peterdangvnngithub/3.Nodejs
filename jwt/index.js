const express = require('express');
const app = express();

const jwt = require('jsonwebtoken');

app.use(express.json());

const posts = [
	{ username: 'PeterDang', title: 'Post1' },
	{ username: 'RosaTo', title: 'Post2' },
];

app.get('/posts', (req, res) => {
	res.json(posts);
});

app.get('/login', (req, res) => {
	// Authhenticate User
	const username = req.body.username;
	const user = { name: username };

	jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
});

app.listen(3000);
