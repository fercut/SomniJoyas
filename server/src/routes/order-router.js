import {Router} from 'express';
import { getOrdersController,
         getOrdersByIdController,
         createOrderController,
         updateOrderController, 
         deleteOrderController,
        } from '../controllers/orders-controller.js';
import { checkToken } from '../middlewares/auth-middleware.js';

const router = Router();

router.get('/', getOrdersController);
router.get('/order/:id', checkToken, getOrdersByIdController)
router.post('/', checkToken, createOrderController);
router.patch('/', checkToken, updateOrderController);
router.delete('/:id', checkToken, deleteOrderController);

export default router;
