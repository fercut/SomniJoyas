import { HttpStatusError } from 'common-errors';
import jwt from 'jsonwebtoken';
import { getUserByEmail } from '../services/database/user-db-services.js';
import config from '../config.js';
import { checkHash } from '../utils/encrypt.js';

export async function login(req, res, next) {
  const { email, password } = req.body;

  try {
    const user = await getUserByEmail(email);

    if (user) {
      const isPasswordValid = await checkHash(password, user.password);

      if (isPasswordValid) {
        const userInfo = { id: user.id, name: user.name, email: user.email, isAdmin: user.isAdmin };
        const jwtConfig = { expiresIn: '24h' };
        const token = jwt.sign(userInfo, config.app.secretKey, jwtConfig); // Utilizamos una única clave secreta
        const userId = user.id;

        return res.status(200).send({ token, userId, isAdmin: user.isAdmin });
      }
    }

    throw new HttpStatusError(401, 'Contraseña o email incorrecto');
  } catch (error) {
    next(error);
  }
}
