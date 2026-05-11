const Order = require("../models/Order");
const Cart = require("../models/Cart");

exports.createOrder = async (req, res) => {

  const cart = await Cart.findOne({ user: req.user.id }).populate("items.product");

  let total = 0;

  cart.items.forEach(item => {
    total += item.product.price * item.quantity;
  });

  const order = await Order.create({
    user: req.user.id,
    items: cart.items,
    totalPrice: total
  });

  cart.items = [];
  await cart.save();

  res.json(order);
};


exports.getMyOrders = async (req, res) => {

  const orders = await Order.find({ user: req.user.id }).populate("items.product");

  res.json(orders);
};