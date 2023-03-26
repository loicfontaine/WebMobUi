import { getProducts, getCategory } from "/src/api.js";

const productList = document.querySelector(".product-list");

const productListTemplate = document.querySelector(
  ".product-list-item-template"
);

async function renderProductList(products) {
  productList.replaceChildren();
  console.log(products);
  if (!products) {
    products = await getProducts();
  }

  products.forEach((product) => {
    const newProduct = productListTemplate.content.cloneNode(true);

    newProduct.querySelector(
      "a.product-list-item-image-link"
    ).href = `#products-${product.id}`;
    newProduct.querySelector("img").src = product.image_url;
    newProduct.querySelector(".product-list-item-name").innerText =
      product.name;
    newProduct.querySelector(".product-list-item-category").innerText =
      product.category.name;
    newProduct.querySelector(
      ".product-list-item-category"
    ).href = `#categories-${product.category.id}`;

    productList.append(newProduct);
  });
}

export { renderProductList };
