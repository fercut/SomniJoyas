import { Articles } from "../../models/index.js";

// Mostrar articulos
export async function getArticles(){
  return await Articles.find();
}

// Crear articulos
export async function createArticle(article){
  const articlesDoc = new Articles(article);
  return await articlesDoc.save();
}

// Mostrar articulo segun su ID
export async function getArticleByID(idArticle){
  return await Articles.findById(idArticle);
}

// Actualizar articulo
export async function updateArticle(idArticle, newArticle ){
  return Articles.findByIdAndUpdate(idArticle, newArticle, { new: true });
}

// Borrar articulo
export async function deleteArticle(idArticle){
  return Articles.findByIdAndDelete(idArticle);
}

// Mostrar joyas aleatorias en el '/home'
export async function getArticlesResume(params) {
    // TODO Get first 5-10 items for each type
}

// Mostrar anillos
export async function getRings(rings) {
  return Articles.find(rings);
}

// Mostrar pulseras
export async function getBracelets(bracelets) {
  return Articles.find(bracelets);
}

//Mostrar gargantillas
export async function getChoker(choker) {
  return Articles.find(choker);
}

// Mostrar pendientes
export async function getEarrings(earrings) {
  return Articles.find(earrings);
}

//Mostrar cadenas
export async function getChains(chains) {
  return Articles.find(chains);
}

// Mostrar colgantes
export async function getPendants(pendants) {
  return Articles.find(pendants);
}

// Mostrar busquedas
export async function getSearch({type, material, details}) {
  return Articles.find({
    $or: [
      { type: { $regex: type, $options: 'i' } },
      { material: { $regex: material, $options: 'i' } },
      { details: { $regex: details, $options: 'i' } }
    ]
  });
}