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

router.get('/', getOrdersController);
router.get('/order/:userId', checkToken, getOrdersByIdController);
router.post('/', checkToken, createOrderController);
router.patch('/:id', updateOrderController);
router.delete('/:id', deleteOrderController);

export default router;
