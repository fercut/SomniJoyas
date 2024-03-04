import { Orders } from "../../models/index.js";
import logger from "../../utils/logger.js";

export async function getOrders(filters){
  // TODO add filters
  const articles = await Orders.find();
  return articles;
}

export async function createOrders(order){
  const ordersDoc = new Orders(order);
  try {
    const createOrder = await ordersDoc.save();
    logger.info('Orden creada con exito')
  return createOrder;
  } catch (error) {
    logger.info('Orden no creada, revise bien los campos')
  }
}
