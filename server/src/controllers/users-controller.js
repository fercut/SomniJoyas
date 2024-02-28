import { createUser, getUsers } from '../services/database/user-db-service.js';
import { encryptPassword } from '../utils/encrypt.js';
import { User } from '../models/index.js';
import { getUserByEmail } from '../services/database/user-db-service.js';
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
  try{
    const user = await getUserByEmail(req.user.email);
    return res.send(user);
  }catch(error) {
    next(error);
  }
}

export async function updateUserController(req, res, next){
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
}

export const deleteUserController = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
};