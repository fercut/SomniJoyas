import express from 'express';
import { login } from '../controllers/login-controller.js';
import { contactController } from '../controllers/smtp-controller.js';
import { buyController } from '../controllers/smtp-controller.js';
import miscRouter from './misc-router.js';
import userRouter from './user-router.js';
import articleRouter from './article-router.js';
import orderRouter from './order-router.js';


const router = express.Router();

router.post('/login', login);
router.post('/send-email-company', contactController);
router.post('/send-email-buy', buyController);

router.use(miscRouter);
router.use('/users', userRouter);
router.use('/articles', articleRouter);
router.use('/orders', orderRouter)


export default router;
