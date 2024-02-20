import express from 'express';
import { login } from '../controllers/login-controller.js';
import miscRouter from './misc-router.js';
import userRouter from './user-router.js';
import notesRouter from './notes-router.js'
import { checkToken } from '../middlewares/auth-middleware.js';

const router = express.Router();

router.post('/login', login);

router.use(miscRouter);
router.use('/users', userRouter);
router.use('/notes', checkToken, notesRouter)

export default router;
