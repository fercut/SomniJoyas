import express from 'express';
import { init } from './src/loaders/index.js';
import config from './src/config.js';

const app = express();

init(app, config);

export default app;
