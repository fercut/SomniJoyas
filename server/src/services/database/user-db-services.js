import { User } from "../../models/index.js";

export async function getUserByEmail(email) {
    return await User.findOne({email});
}

export async function getUsers(){
  return await User.find();
}

export async function getUserById(userId) {
    return await User.findById(userId);
}

export async function createUser(userId) {
  const userDoc = new User(userId);
  return await userDoc.save();
}

export async function deleteUser(userId) {
  return User.findByIdAndDelete(userId);
}
