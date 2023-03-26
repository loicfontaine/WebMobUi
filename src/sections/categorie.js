import { getCategory, getCategoryLabel } from "../api";
import { renderProductList } from "./products";

const CategoryList = document.querySelector("ca");
const categoryTemplate = document.querySelector(".categorie-template");
const categoryHomeList = document.querySelector(".category-list");

async function renderCategoryProducts(id) {
  const categories = await getCategory(id);

  document.querySelector(
    "#products-section h4"
  ).innerText = `Produits > ${categories[0].category.name}`;
  renderProductList(categories);
}

async function renderCategory() {
  categoryHomeList.replaceChildren();
  const categories = await getCategoryLabel();

  categories.forEach((categorie) => {
    const newCategorie = categoryTemplate.content.cloneNode(true);

    newCategorie.querySelector("a").href = `#categories-${categorie.id}`;
    newCategorie.querySelector("a").innerText = categorie.name;
    categoryHomeList.append(newCategorie);
  });
}

export { renderCategoryProducts, renderCategory };
