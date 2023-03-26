// URL de base du serveur
const BASE_URL = "https://webmobui-22-exa-backend.herokuapp.com/api";

// Fonction loadJson utilisée à l'interne. Elle s'occupe de charger l'url passée en paramètre et convertir
// son résultat en json
function loadJson(url) {
  return fetch(url).then((response) => response.json());
}

// Retourne une liste d'artistes
function getProducts() {
  return loadJson(`${BASE_URL}/products`);
}

function getCategory(id) {
  return loadJson(`${BASE_URL}/categories/${id}/products`);
}

function getProductsDetails(id) {
  return loadJson(`${BASE_URL}/products/${id}`);
}

function getCategoryLabel() {
  return loadJson(`${BASE_URL}/categories`);
}

export { getProducts, getCategory, getProductsDetails, getCategoryLabel };
