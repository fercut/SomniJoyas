import {
    getOrdersController,
    createOrderController,
    updateOrderController,
    deleteOrderController,
    getOrdersByIdController,
  } from '../controllers/orders-controller';
  
  import {
    createOrders,
    getOrders,
    updateOrder,
    deleteOrder,
    getOrdersById,
  } from '../services/database/order-db-service';
  
  // Mock para req, res y next
  const mockRequest = (body, params = {}, query = {}, user = {}) => ({
    body,
    params,
    query,
    user,
  });
  
  const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    return res;
  };
  
  const mockNext = jest.fn();
  
  // Mock de las funciones del servicio de base de datos
  jest.mock('../services/database/order-db-service', () => ({
    createOrders: jest.fn(),
    getOrders: jest.fn(),
    updateOrder: jest.fn(),
    deleteOrder: jest.fn(),
    getOrdersById: jest.fn(),
  }));
  
  describe('Orders Controller Tests', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    test('getOrdersController - Success', async () => {
      const req = mockRequest({}, {}, {}, {});
      const res = mockResponse();
      const orders = [{ id: 1, user: 'userID', article: ['articleID'], date: new Date(), price: 100 }]; // Mock data
      getOrders.mockResolvedValueOnce(orders);
  
      await getOrdersController(req, res, mockNext);
  
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(orders);
      expect(mockNext).not.toHaveBeenCalled();
    });
  
    test('createOrderController - Success', async () => {
      const req = mockRequest({ user: 'userID', article: ['articleID'], price: 100 });
      const res = mockResponse();
      const createdOrder = { id: 1, user: 'userID', article: ['articleID'], date: new Date(), price: 100 }; // Mock created order
      createOrders.mockResolvedValueOnce(createdOrder);
  
      await createOrderController(req, res, mockNext);
  
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.send).toHaveBeenCalledWith(createdOrder);
      expect(mockNext).not.toHaveBeenCalled();
    });
  
    test('getOrdersByIdController - Success', async () => {
      const req = mockRequest({}, { userId: 'userID' });
      const res = mockResponse();
      const orders = [{ id: 1, user: 'userID', article: ['articleID'], date: new Date(), price: 100 }]; // Mock data
      getOrdersById.mockResolvedValueOnce(orders);
  
      await getOrdersByIdController(req, res, mockNext);
  
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ orders });
      expect(mockNext).not.toHaveBeenCalled();
    });
  
    test('updateOrderController - Success', async () => {
      const req = mockRequest({}, { id: 'orderID' });
      const res = mockResponse();
      const updatedOrder = { id: 'orderID', user: 'userID', article: ['articleID'], date: new Date(), price: 150 }; // Mock updated order
      updateOrder.mockResolvedValueOnce(updatedOrder);
  
      await updateOrderController(req, res, mockNext);
  
      expect(res.json).toHaveBeenCalledWith(updatedOrder);
      expect(mockNext).not.toHaveBeenCalled();
    });
  
    test('deleteOrderController - Success', async () => {
      const req = mockRequest({}, { id: 'orderID' });
      const res = mockResponse();
      deleteOrder.mockResolvedValueOnce();
  
      await deleteOrderController(req, res);
  
      expect(res.json).toHaveBeenCalledWith({ message: 'Orden eliminado correctamente' });
    });
  
    test('getOrdersController - Error', async () => {
      const req = mockRequest({}, {}, {}, {});
      const res = mockResponse();
      const errorMessage = 'Error fetching orders';
      getOrders.mockRejectedValueOnce(new Error(errorMessage));
  
      await getOrdersController(req, res, mockNext);
  
      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
      expect(mockNext).toHaveBeenCalled();
    });
  });
  