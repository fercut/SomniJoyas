import { User } from "../../models/index.js";

export async function getUserByName(username, password) {
  const user = await User.findOne({username, password});
  return user;
}

export async function getUsers(filters){
  const users = await User.find();
  return users;
}

export async function createUser(user){
  const userDoc = new User(user);
  const createdUser = await userDoc.save();
  return createdUser;
}
