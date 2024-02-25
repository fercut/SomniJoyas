import {Router} from 'express';
import { getUserController, createUserController, getUserMe, updateUserController, deleteUserController } from '../controllers/users-controller.js';
import { checkToken } from '../middlewares/auth-middleware.js';

const router = Router();

router.get('/me', checkToken, getUserMe);
router.get('/list', getUserController);
router.post('/', createUserController);
router.patch('/:id', updateUserController);
router.delete('/:id', deleteUserController);

export default router;
