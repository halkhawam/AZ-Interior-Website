const Cart = require("../models/Cart");

exports.getCart = async (req, res) => {

  const cart = await Cart.findOne({ user: req.user.id }).populate("items.product");

  res.json(cart);
};


exports.addToCart = async (req, res) => {

  const { productId, quantity } = req.body;

  let cart = await Cart.findOne({ user: req.user.id });

  if (!cart) {
    cart = await Cart.create({ user: req.user.id, items: [] });
  }

  const itemIndex = cart.items.findIndex(i => i.product.toString() === productId);

  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += quantity;
  } else {
    cart.items.push({ product: productId, quantity });
  }

  await cart.save();

  res.json(cart);
};


exports.removeFromCart = async (req, res) => {

  const { productId } = req.body;

  const cart = await Cart.findOne({ user: req.user.id });

  cart.items = cart.items.filter(i => i.product.toString() !== productId);

  await cart.save();

  res.json(cart);
};