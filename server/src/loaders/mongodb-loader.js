import mongoose from 'mongoose';
import logger from '../utils/logger.js';

export default async function(config){
    const url = `mongodb+srv://${config.user}:${config.password}@${config.cluster}${config.bbdd}`;
    try{
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        logger.info(`Connected to MongoDB at ${url}`);
    } catch(error){
        logger.error(`Error connecting to MongoDB at ${url}`);
    }
}