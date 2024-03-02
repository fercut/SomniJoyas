import { createOrders, getOrders } from '../services/database/order-db-service.js';
import { Orders } from '../models/index.js';

export async function getOrdersController(req,res,next){
  try {
    const orders = await getOrders(req.query);
    return res.json(orders);
  } catch (error){
    next(error);
  }
}

export async function createOrderController(req, res, next){
  try{
    const body = req.body;
    const orders = await createOrders(req.body);
    return res.status(201).send(orders);
  } catch (error) {

    if(error.code === 11000){
      error.status = 409;
    }
    if(error.message.includes('validation')){
      error.status = 400;
    }
    next(error);
  }
}

export async function updateOrderController(req, res, next){
  try {
    const updateArticle = await Orders.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updateArticle);
  } catch (error) {
    next(error);
  }
}

export const deleteOrderController = async (req, res) => {
  try {
    await Orders.findByIdAndDelete(req.params.id);
    res.json({ message: 'Orden eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar orden' });
  }
};
