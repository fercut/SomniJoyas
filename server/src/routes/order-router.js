import { Router } from 'express';
import {
        getOrdersController,
        getOrdersByIdController,
        createOrderController,
        updateOrderController,
        deleteOrderController,
} from '../controllers/orders-controller.js';
import { checkToken } from '../middlewares/auth-middleware.js';

const router = Router();

router.get('/', checkToken, getOrdersController);
router.get('/order/:userId', checkToken, getOrdersByIdController);
router.post('/', checkToken, createOrderController);
router.patch('/', checkToken, updateOrderController);
router.delete('/:id', checkToken, deleteOrderController);

export default router;
