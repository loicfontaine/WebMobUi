import { getCategory } from "../api";
import { renderProductList } from "./products";

const CategoryList = document.querySelector("ca");

async function renderCategoryProducts(id) {
  const categories = await getCategory(id);

  renderProductList(categories);
}

export { renderCategoryProducts };
