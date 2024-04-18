import { HttpStatusError } from "common-errors";
import jwt from "jsonwebtoken";
import logger from "../utils/logger.js";

import config from "../config.js";

export function checkToken(req, res, next){
    console.log(req.headers.token)

    const {authorization} = req.headers;

    if(!authorization) throw HttpStatusError(401, 'No token provided');

    const [_bearer, token] = authorization.split(' ');

    try{
        const tokenInfo = jwt.verify(token, config.app.secretKey);
        req.user = tokenInfo;
    }catch(err){
        logger.error(err.message);
        throw HttpStatusError(401, 'Invalid token');
    }

    next();
}

export function checkRoot(req, res, next){
    console.log(req.headers.token)

    const {authorization} = req.headers;

    if(!authorization) throw HttpStatusError(401, 'Usuario no autorizado');

    const [_bearer, token] = authorization.split(' ');

    try{
        const tokenInfo = jwt.verify(token, config.app.secretRoot);
        req.user = tokenInfo;
    }catch(err){
        logger.error(err.message);
        throw HttpStatusError(401, 'Invalid token');
    }

    next();
}