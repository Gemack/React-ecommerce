const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoute = require("./route/user");
const productRoute = require("./route/product");
const cartRoute = require("./route/cart");
const orderRoute = require("./route/order");
const stripeRoute = require("./route/stripe");
const Auth = require("./route/auth");
const secret = require("./models/secret");

const app = express();

mongoose
  .connect("mongodb://localhost/Ecommerce-dev")
  .then(() => console.log("MongoDB is connected ....."))
  .catch((err) => console.log(err));
app.use(cors());
app.use(express.json());
app.use("/api/auth", Auth);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

const port = 5000;

app.listen(port, () => {
  console.log(`backend server is runing on port ${port}`);
});
