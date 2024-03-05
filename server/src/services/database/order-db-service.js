import { Orders } from "../../models/index.js";

export async function getOrders() {
  const articles = await Orders.find();
  return articles;
}

export async function createOrders(order) {
  const ordersDoc = new Orders(order);
  return await ordersDoc.save();
}

export async function updateOrder(idArticle, newArticle) {
  return await Orders.findByIdAndUpdate(idArticle, newArticle, { new: true });
}