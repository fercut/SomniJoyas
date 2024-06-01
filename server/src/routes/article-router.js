import { Router } from 'express';
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
    getHomeController
} from '../controllers/articles-controller.js';
import { checkToken } from '../middlewares/auth-middleware.js';

const router = Router();

// CRUD
router.post('/', checkToken, createArticleController);
router.patch('/:id', checkToken, updateArticleController);
router.delete('/:id', checkToken, deleteArticleController);

// Mostrar articulos
router.get('/', getArticleController);
router.get('/get/:id', getArticleByIDController);
router.get('/rings', getRingsController);
router.get('/bracelets', getBraceletsController);
router.get('/chokers', getChokerController);
router.get('/earrings', getEarringsController);
router.get('/chains', getChainsController);
router.get('/pendants', getPendantsController);

// Barra de busqueda
router.get('/search/:filtro', getSearchController);

// Pantalla de inicio
router.get('/home', getHomeController);

export default router;
