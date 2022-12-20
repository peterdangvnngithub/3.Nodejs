import express from 'express';
import config from './config.js';

const app = express();

// settings
app.set('port', config.port || 3000);

export default app;
