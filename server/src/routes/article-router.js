import {Router} from 'express';
import { getArticleController, createArticleController, updateArticleController, deleteArticleController } from '../controllers/articles-controler.js';

const router = Router();

router.get('/', getArticleController);
router.post('/', createArticleController);
router.patch('/:id', updateArticleController);
router.delete('/:id', deleteArticleController);

export default router;
