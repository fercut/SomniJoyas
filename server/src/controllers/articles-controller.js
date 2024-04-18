import {
   createArticle,
   getArticles,
   getArticleByID,
   updateArticle,
   deleteArticle,
   getRings,
   getBracelets,
   getChoker,
   getEarrings,
   getChains,
   getPendants,
   getSearch,
   getMixArticles,
  } from '../services/database/article-db-service.js';

export async function getArticleController(req,res,next){
  try {
    const articles = await getArticles(req.query);
    return res.json(articles);
  } catch (error){
    next(error);
  }
}

export async function getArticleByIDController(req,res,next){
  try {
    const article = await getArticleByID(req.params.id);
    return res.json(article);
  } catch (error){
    next(error);
  }
}

export async function createArticleController(req, res, next){
  try{
    const body = req.body;
    const articles = await createArticle(body);
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
    const update = await updateArticle(req.params.id, req.body);
    res.json(update);
  } catch (error) {
    next(error);
  }
}

export const deleteArticleController = async (req, res) => {
  try {
    await deleteArticle(req.params.id);
    res.json({ message: 'Articulo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar articulo' });
  }
};

export async function getRingsController(req, res, next) {
  try {
    const rings = await getRings({ type: 'anillo' });
    return res.status(200).json(rings);
  } catch (error) {
    console.error('Error al obtener los anillos:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
    next(error);
  }
}

export async function getBraceletsController(req, res, next) {
  try {
    const bracelets = await getBracelets({ type: 'pulsera' });
    res.status(200).json(bracelets);
  } catch (error) {
    console.error('Error al obtener las pulseras:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
    next(error);
  }
}

export async function getChokerController(req, res, next) {
  try {
    const chokers = await getChoker({ type: 'gargantilla' });
    res.status(200).json(chokers);
  } catch (error) {
    console.error('Error al obtener las gargantillas:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
    next(error);
  }
}

export async function getEarringsController(req, res, next) {
  try {
    const earrings = await getEarrings({ type: 'pendiente' });
    res.status(200).json(earrings);
  } catch (error) {
    console.error('Error al obtener los pendientes:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
    next(error);
  }
}

export async function getChainsController(req, res, next) {
  try {
    const chains = await getChains({ type: 'cadena' });
    res.status(200).json(chains);
  } catch (error) {
    console.error('Error al obtener las cadenas:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
    next(error);
  }
}

export async function getPendantsController(req, res, next) {
  try {
    const pendants = await getPendants({ type: 'colgante' });
    res.status(200).json(pendants);
  } catch (error) {
    console.error('Error al obtener los colgantes:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
    next(error);
  }
}

export async function getSearchController(req, res, next) {
  try {
    const searchTerm = req.params.filtro;

    const searchResults = await getSearch({
      type: searchTerm,
      material: searchTerm,
      details: searchTerm
    });

    res.status(200).json(searchResults);

  } catch (error) {
    console.error('Error al realizar la búsqueda:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
    next(error);
  }
}

export async function getHomeController(req, res, next) {
  try {
    const articles = await getMixArticles(req.query);
    return res.json(articles);
  } catch (error){
    next(error);
  }
}
