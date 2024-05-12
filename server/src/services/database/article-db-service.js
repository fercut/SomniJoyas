import { Articles } from "../../models/index.js";

// Mostrar articulos
export async function getArticles() {
  return await Articles.find();
}

// Crear articulos
export async function createArticle(article) {
  const articlesDoc = new Articles(article);
  return await articlesDoc.save();
}

// Mostrar articulo segun su ID
export async function getArticleByID(idArticle) {
  return await Articles.findById(idArticle);
}

// Actualizar articulo
export async function updateArticle(idArticle, newArticle) {
  return Articles.findByIdAndUpdate(idArticle, newArticle, { new: true });
}

// Borrar articulo
export async function deleteArticle(idArticle) {
  return Articles.findByIdAndDelete(idArticle);
}

// Mostrar joyas aleatorias en el '/home'
export async function getArticlesResume(params) {
  // TODO Get first 5-10 items for each type
}

// Mostrar anillos
export async function getRings(rings, page, pageSize) {
  const skip = (page - 1) * pageSize;
  return Articles.find(rings)
    .skip(skip)
    .limit(pageSize);
}

// Mostrar pulseras
export async function getBracelets(bracelets, page, pageSize) {
  const skip = (page - 1) * pageSize;
  return Articles.find(bracelets)
    .skip(skip)
    .limit(pageSize);
}

//Mostrar gargantillas
export async function getChoker(choker, page, pageSize) {
  const skip = (page - 1) * pageSize;
  return Articles.find(choker)
    .skip(skip)
    .limit(pageSize);
}

// Mostrar pendientes
export async function getEarrings(earrings, page, pageSize) {
  const skip = (page - 1) * pageSize;
  return Articles.find(earrings)
    .skip(skip)
    .limit(pageSize);
}

//Mostrar cadenas
export async function getChains(chains, page, pageSize) {
  const skip = (page - 1) * pageSize;
  return Articles.find(chains)
    .skip(skip)
    .limit(pageSize);
}

// Mostrar colgantes
export async function getPendants(pendants, page, pageSize) {
  const skip = (page - 1) * pageSize;
  return Articles.find(pendants)
    .skip(skip)
    .limit(pageSize);
}

// Mostrar busquedas
export async function getSearch({ type, material, details }) {
  return Articles.find({
    $or: [
      { type: { $regex: type, $options: 'i' } },
      { material: { $regex: material, $options: 'i' } },
      { details: { $regex: details, $options: 'i' } }
    ]
  });
}

// Mostrar articulos de forma aleatoria
export async function getMixArticles(page, pageSize) {
  const skip = (page - 1) * pageSize;
  return await Articles.aggregate([
    { $sample: { size: await Articles.countDocuments() } },
    { $skip: skip },
    { $limit: pageSize }
  ]);
}
