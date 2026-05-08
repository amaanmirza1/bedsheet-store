export function addToCart(product: any) {
  const cart = JSON.parse(
    localStorage.getItem("cart") || "[]"
  );

  cart.push(product);

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );
}

export function getCart() {
  return JSON.parse(
    localStorage.getItem("cart") || "[]"
  );
}