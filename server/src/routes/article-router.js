import {Router} from 'express';
import {
            getArticleController,
            getArticleByIDController,
            createArticleController,
            updateArticleController,
            deleteArticleController,
            getRingsController,
            getBraceletsController,
            getChokerController,
            getEarringsController,
            getChainsController,
            getPendantsController,
            getSearchController,
        } from '../controllers/articles-controler.js';

const router = Router();

// CRUD
router.get('/', getArticleController);
router.get('/get/:id',getArticleByIDController);
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

// Barra de busqueda
router.get('/search/:filtro', getSearchController);

export default router;
