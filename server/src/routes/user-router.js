import {Router} from 'express';
import { getUserController, createUserController, getUserMe } from '../controllers/users-controller.js';
import { checkToken } from '../middlewares/auth-middleware.js';

const router = Router();

router.get('/me', checkToken, getUserMe);
router.get('/', getUserController);
router.post('/', createUserController)

export default router;
