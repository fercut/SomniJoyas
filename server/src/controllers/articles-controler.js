import { createArticle, getArticles } from '../services/database/article-db-service.js';
import { Articles } from '../models/index.js';

export async function getArticleController(req,res,next){
  try {
    const articles = await getArticles(req.query);
    return res.json(articles);
  } catch (error){
    next(error);
  }
}

export async function createArticleController(req, res, next){
  try{
    const body = req.body;
    const articles = await createArticle(req.body);
    return res.status(201).send(articles);
  } catch (error) {

    if(error.code === 11000){
      error.status = 409;
    }
    if(error.message.includes('validation')){
      error.status = 400;
    }
    next(error);
  }
}

export async function updateArticleController(req, res, next){
  try {
    const updateArticle = await Articles.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updateArticle);
  } catch (error) {
    next(error);
  }
}

export const deleteArticleController = async (req, res) => {
  try {
    await Articles.findByIdAndDelete(req.params.id);
    res.json({ message: 'Articulo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar articulo' });
  }
};
