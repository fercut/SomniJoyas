import {Router} from 'express';
import { getOrdersController,
         createOrderController,
         updateOrderController, 
         deleteOrderController,
        } from '../controllers/orders-controller.js';
import { checkToken } from '../middlewares/auth-middleware.js';

const router = Router();

router.get('/', getOrdersController);
router.post('/', checkToken, createOrderController);
router.patch('/', checkToken, updateOrderController);
router.delete('/:id', checkToken, deleteOrderController);

export default router;
