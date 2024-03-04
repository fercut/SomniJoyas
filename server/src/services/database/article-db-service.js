import { Articles } from "../../models/index.js";
import logger from "../../utils/logger.js";

export async function getArticles(){
  return await Articles.find();
}

export async function createArticle(article){
  const articlesDoc = new Articles(article);
  return await articlesDoc.save();
}

export async function getArticleByID(idArticle){
  return await Articles.findById(idArticle);
}

export async function updateArticle(idArticle, newArticle, option){
  return Articles.findByIdAndUpdate(idArticle, newArticle, option);
}

export async function deleteArticle(idArticle){
  return Articles.findByIdAndDelete(idArticle);
}

export async function getArticlesResume(params) {
    // TODO Get first 5-10 items for each type
}

