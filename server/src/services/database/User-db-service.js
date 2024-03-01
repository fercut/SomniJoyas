import { User } from "../../models/index.js";

export async function getUserByEmail(email) {
  try {
    const user = await User.findOne({email}).populate('cart.itemId');
    return user;
  } catch (error) {
    throw new Error('Error al obtener el usuario por email');
  }
}

export async function getUsers(filters){
  const users = await User.find();
  return users;
}

export async function getUserById(userId) {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    throw new Error('Error al obtener el usuario por ID');
  }
}

export async function createUser(user){
  const userDoc = new User(user);
  const createdUser = await userDoc.save();
  return createdUser;
}
