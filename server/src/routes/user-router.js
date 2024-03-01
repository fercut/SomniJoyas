import {Router} from 'express';
import { getUserController,
         createUserController,
         getUserMe,
         updateUserController, 
         deleteUserController,
        } from '../controllers/users-controller.js';
import { login } from '../controllers/login-controller.js';
import { checkToken } from '../middlewares/auth-middleware.js';

const router = Router();

router.get('/me', checkToken, getUserMe);
router.get('/list', getUserController);
router.post('/', createUserController);
router.post('/login', login)
router.patch('/:id', checkToken, updateUserController);
router.delete('/:id', checkToken, deleteUserController);

export default router;
