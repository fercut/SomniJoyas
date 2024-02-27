import {Router} from 'express';
import { 
            getArticleController,
            createArticleController, 
            updateArticleController, 
            deleteArticleController,
            getRingsController,
            getBraceletsController,
            getChokerController,
            getEarringsController,
            getChainsController,
            getPendantsController,
        } from '../controllers/articles-controler.js';

const router = Router();

router.get('/', getArticleController);
router.post('/', createArticleController);
router.patch('/:id', updateArticleController);
router.delete('/:id', deleteArticleController);

// Mostrar articulos
router.get('/rings', getRingsController);
router.get('/bracelets', getBraceletsController);
router.get('/choker', getChokerController);
router.get('/earrings', getEarringsController);
router.get('/chains', getChainsController);
router.get('/pendants', getPendantsController);

export default router;
