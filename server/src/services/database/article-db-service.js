import { Articles } from "../../models/index.js";
import logger from "../../utils/logger.js";

export async function getArticles(filters){
  const articles = await Articles.find();
  return articles;
}

export async function createArticle(article){
  const articlesDoc = new Articles(article);
  try {
    const createdArticle = await articlesDoc.save();
    logger.info('Articulo creado con exito')
  return createdArticle;
  } catch (error) {
    logger.info('Articulo no creado, revise bien los campos')
  }
}

export async function getArticlesResume(params) {
    // TODO Get first 5-10 items for each type
}

