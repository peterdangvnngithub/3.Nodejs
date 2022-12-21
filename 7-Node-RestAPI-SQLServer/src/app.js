import express from 'express';
import config from './config.js';

import workersRoutes from './routes/products.routes.js';

const app = express();

// settings
app.set('port', config.port || 3000);

// Middlewares
// Built-in middleware function in Express.
// It parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(workersRoutes);

export default app;
