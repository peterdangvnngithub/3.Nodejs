import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.port || 5000;

const URI =
	'mongodb+srv://sa:sa@cluster0.vs6dk6s.mongodb.net/?retryWrites=true&w=majority';

// Declare to use middleware
app.use(bodyParser.json({ limit: '30mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' })); // 30MB transfer capacity limit
app.use(cors());

// localhost:5000/posts
app.use('/posts', posts);

mongoose.set('strictQuery', true);
mongoose
	.connect(URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('Connected to DB');
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	})
	.catch((err) => {
		console.log('err', err);
	});
