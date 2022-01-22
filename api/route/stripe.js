const router = require("express").Router();
const { request } = require("express");
const secret = require("../models/secret");
const stripe = require("stripe")(secret);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: request.body.amount,
      currency: "Naira",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
