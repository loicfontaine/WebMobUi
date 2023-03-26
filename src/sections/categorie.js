import { getCategory } from "../api";
import { renderProductList } from "./products";

const CategoryList = document.querySelector("ca");

async function renderCategoryProducts(id) {
  const categories = await getCategory(id);

  document.querySelector(
    "#products-section h4"
  ).innerText = `Produits > ${categories[0].category.name}`;
  renderProductList(categories);
}

export { renderCategoryProducts };
