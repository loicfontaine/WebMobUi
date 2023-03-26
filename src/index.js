import "./css/index.css";
import { domOn, domForEach } from "./lib/domManipulator";
import { renderProductList } from "./sections/products";
import { renderCategoryProducts } from "./sections/categorie.js";

function toggleSection(section) {
  document.querySelector("section.active")?.classList.remove("active");
  document.querySelector(`${section}-section`)?.classList.add("active");
}

function toggleNav(section) {
  document.querySelector("nav a.active")?.classList.remove("active");
  document.querySelector(`nav a[href="${section}"]`)?.classList.add("active");
}

function displaySection() {
  const section = window.location.hash || "#home";
  const sectionSplit = section.split("-");

  // Toggle par défaut des sections et de la navigation
  toggleSection(sectionSplit[0]);
  toggleNav(sectionSplit[0]);

  switch (sectionSplit[0]) {
    case "#products":
      if (sectionSplit[1]) {
        //renderPageProduct(sectionSplit[1]);
      } else {
        renderProductList();
      }
      break;
    case "#categories":
      if (sectionSplit[1]) {
        console.log("yo");
        toggleSection("#products");
        renderCategoryProducts(sectionSplit[1]);
      }
      break;
    case "#cart":
      //renderCart();
      break;
  }
}

window.addEventListener("hashchange", displaySection);

displaySection();
