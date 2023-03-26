import JsonStorage from "/src/lib/JsonStorage.js";

const cartStorage = new JsonStorage({
  name: "cart",
  eventName: "cart_updated",
});

// Cette fonction toggle une chanson au sein de la liste des favoris
const toggleCart = (cart) => {
  if (isInCart(cart)) {
    cartStorage.removeItem(cart.id);
  } else {
    cartStorage.setItem(cart.id, cart);
  }
};

// Vérifie si une chanson est dans les favoris (retourne l'entry si oui, undefined si non)
const isInCart = (cart) => {
  return cartStorage.getItem(cart.id);
};

// Retourne la liste des favoris sous forme de tableau avec seulement la valeur (voir slides pour explication)
const getCart = () => {
  return cartStorage.toArray().map((e) => e[1]);
};

export { toggleCart, isInCart, getCart };
