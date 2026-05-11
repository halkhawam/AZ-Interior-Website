const Stripe = require("stripe");

const stripe = new Stripe("YOUR_STRIPE_SECRET");

exports.createCheckoutSession = async (req, res) => {

  const { items } = req.body;

  const session = await stripe.checkout.sessions.create({

    payment_method_types: ["card"],

    line_items: items.map(item => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name
        },
        unit_amount: item.price * 100
      },
      quantity: item.quantity
    })),

    mode: "payment",

    success_url: "http://localhost:5173/success",

    cancel_url: "http://localhost:5173/cancel"
  });

  res.json({ url: session.url });
};