import { Router } from 'express';
import {
        getOrdersController,
        getOrdersByIdController,
        createOrderController,
        updateOrderController,
        deleteOrderController,
} from '../controllers/orders-controller.js';
import { checkRoot, checkToken } from '../middlewares/auth-middleware.js';

const router = Router();

router.get('/', checkRoot, getOrdersController);
router.get('/order/:userId', checkToken, getOrdersByIdController);
router.post('/', checkToken, createOrderController);
router.patch('/:id', checkRoot, updateOrderController);
router.delete('/:id', checkRoot, deleteOrderController);

export default router;
