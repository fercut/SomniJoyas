import express from 'express';
import { login } from '../controllers/login-controller.js';
import miscRouter from './misc-router.js';
import userRouter from './user-router.js';
import articleRouter from './article-router.js';

const router = express.Router();

router.post('/login', login);

router.use(miscRouter);
router.use('/users', userRouter);
router.use('/articles', articleRouter);


export default router;
