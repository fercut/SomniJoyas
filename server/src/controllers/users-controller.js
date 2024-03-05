import { 
  createUser, 
  getUsers,
  getUserById,
  deleteUser,
} from '../services/database/user-db-service.js';
import { encryptPassword } from '../utils/encrypt.js';
import { User } from '../models/index.js';
import logger from '../utils/logger.js';


export async function getUserController(req,res,next){
  try {
    const users = await getUsers(req.query);
    return res.json(users);
  } catch (error){
    next(error);
  }
}

export async function createUserController(req, res, next){
  try{
    const body = req.body;
    body.password = await encryptPassword(body.password);
    const users = await createUser(req.body);
    return res.status(201).send(users);

  } catch (error) {
    logger.error('Problemas al crear un usuario');
    if(error.code === 11000){
      error.status = 409;
    }
    if(error.message.includes('validation')){
      error.status = 400;
    }
    next(error);
  }
}

export async function getUserMe(req, res, next){
  try {
    const user = await getUserById(req.user.id);

    if (user) {
      return res.send(user);
    } else {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
  } catch (error) {
    next(error);
  }
}

export async function updateUserController(req, res, next) {
  try {
    const { action } = req.body;
    const userId = req.params.id;

    if (action === 'increase') {
      // Acción para aumentar la cantidad
      const updatedUser = await User.findOneAndUpdate(
        { _id: userId, 'cart.itemId': req.body.itemId },
        { $inc: { 'cart.$.quantity': 1 } },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      return res.status(200).json(updatedUser);
    } else if (action === 'decrease') {
      // Acción para disminuir la cantidad
      const updatedUser = await User.findOneAndUpdate(
        { _id: userId, 'cart.itemId': req.body.itemId, 'cart.quantity': { $gt: 1 } },
        { $inc: { 'cart.$.quantity': -1 } },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: 'Usuario no encontrado o cantidad ya en el mínimo' });
      }

      return res.status(200).json(updatedUser);
    } else if (action === 'delete') {
      // Acción para eliminar un artículo del carrito
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        { $pull: { cart: { itemId: req.body.itemId } } },
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      return res.status(200).json(updatedUser);
    } else {
      // Acción para actualizar el usuario sin cambios en el carrito
      const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });

      if (!updatedUser) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      return res.status(200).json(updatedUser);
    }
  } catch (error) {
    next(error);
  }
}

export const deleteUserController = async (req, res) => {
  try {
    await deleteUser(req.params.id);
    res.json({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
};