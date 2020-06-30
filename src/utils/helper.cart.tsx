const addToCart = (product: any, quantity: number) => {
  if (quantity < 1) return 0;
  const storedCart = localStorage.getItem("cart");
  const cart = storedCart ? JSON.parse(storedCart) : {};
  if (cart[product._id]) {
    cart[product._id].quantity += quantity;
  } else {
    cart[product._id] = {quantity, ...product};
    delete cart[product._id]._id
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(cart)
  return quantity;
};

const getCart = () => {
  const storedCart = localStorage.getItem("cart");
  const cart = storedCart ? JSON.parse(storedCart) : {};
  return cart;
};

const clearCart = () => {
  localStorage.setItem("cart", JSON.stringify({}));
};

export { addToCart, getCart, clearCart };
