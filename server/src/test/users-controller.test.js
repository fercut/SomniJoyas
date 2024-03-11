import {
    getUserController,
    createUserController,
    updateUserController,
    deleteUserController,
  } from '../controllers/user-controller';
  
  import {
    createUser,
    getUsers,
    getUserById,
    deleteUser,
  } from '../services/database/user-db-services';
  
  import { User } from '../models/index';
  
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
  jest.mock('../services/database/user-db-services', () => ({
    createUser: jest.fn(),
    getUsers: jest.fn(),
    getUserById: jest.fn(),
    deleteUser: jest.fn(),
  }));
  
  describe('User Controller Tests', () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    // Test para getUserController
    test('getUserController - Success', async () => {
      const req = mockRequest({}, {}, {});
      const res = mockResponse();
      const users = [{ id: 1, name: 'User 1' }]; // Mock data
      getUsers.mockResolvedValueOnce(users);
  
      await getUserController(req, res, mockNext);
  
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(users);
      expect(mockNext).not.toHaveBeenCalled();
    });
  
    // Test para createUserController
    test('createUserController - Success', async () => {
      const req = mockRequest({ name: 'John', email: 'john@example.com', password: '123456' });
      const res = mockResponse();
      const newUser = { id: 2, name: 'John', email: 'john@example.com' }; // Mock data
      createUser.mockResolvedValueOnce(newUser);
  
      await createUserController(req, res, mockNext);
  
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.send).toHaveBeenCalledWith(newUser);
      expect(mockNext).not.toHaveBeenCalled();
    });
  
    // Test para updateUserController
    test('updateUserController - Success', async () => {
      const req = mockRequest({ action: 'increase', itemId: '123' }, { id: 1 });
      const res = mockResponse();
      const updatedUser = { id: 1, name: 'John', cart: [{ itemId: '123', quantity: 2 }] }; // Mock data
      User.findOneAndUpdate = jest.fn().mockResolvedValueOnce(updatedUser);
  
      await updateUserController(req, res, mockNext);
  
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(updatedUser);
      expect(mockNext).not.toHaveBeenCalled();
    });
  
    // Test para deleteUserController
    test('deleteUserController - Success', async () => {
      const req = mockRequest({}, { id: 1 });
      const res = mockResponse();
  
      await deleteUserController(req, res);
  
      expect(res.json).toHaveBeenCalledWith({ message: 'Usuario eliminado exitosamente' });
    });
  });
  