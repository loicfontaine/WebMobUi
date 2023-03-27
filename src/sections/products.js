import { getProducts, getProductsDetails } from "/src/api.js";
import { toggleCart, getCart } from "./cart";

const productList = document.querySelector(".product-list");

const productListTemplate = document.querySelector(
  ".product-list-item-template"
);

async function renderProductList(products) {
  productList.replaceChildren();
  if (!products) {
    products = await getProducts();
  }
  console.log(products);

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

    const cartIcon = newProduct.querySelector(
      ".icon-cart-button .material-icons"
    );
    newProduct.querySelector(".icon-button").addEventListener("click", () => {
      toggleCart(product);
      renderCart();
      // on passe le target du click, à savoir l'icône
    });

    productList.append(newProduct);
  });
}

async function renderPageProduct(id) {
  const productInfo = await getProductsDetails(id);
  document.querySelector(
    "#product-section h4"
  ).innerText = `Produits > ${productInfo.name}`;
  document.querySelector(".product-category-link").innerText =
    productInfo.category.name;
  document.querySelector(
    ".product-category-link"
  ).href = `#categories-${productInfo.category.id}`;
  document.querySelector("#product-section img").src = productInfo.image_url;
}

async function renderCart() {
  renderProductList(getCart());
}

export { renderProductList, renderPageProduct, renderCart };
