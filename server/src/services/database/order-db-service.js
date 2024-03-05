import { Orders } from "../../models/index.js";

export async function getOrders() {
  return await Orders.find();
}

export async function createOrders(order) {
  const ordersDoc = new Orders(order);
  return await ordersDoc.save();
}

export async function updateOrder(idOrder, newOrder) {
  return await Orders.findByIdAndUpdate(idOrder, newOrder, { new: true });
}

export async function deleteOrder(idOrder) {
  return await Orders.findByIdAndDelete(idOrder);
}

export async function getOrdersById(idOrder) {
  return await Orders.find(idOrder);
}