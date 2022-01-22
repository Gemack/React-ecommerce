const router = require("express").Router();
const User = require("../models/User");
const {
  verifyToken,
  verifiedTokenAndAuthorization,
  verifiedTokenAndAdmin,
} = require("./verifyToken");

// Update
router.put("/:id", verifiedTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJs.AES.encrypt(
      req.body.password,
      "blah-blah"
    ).toString();
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete
router.delete("/:id", verifiedTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("This User has been Deleted....");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET USER

router.get("/find/:id", verifiedTokenAndAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL USERS

router.get("/", verifiedTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(1)
      : await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET USERS STATS

router.get("/stats", verifiedTokenAndAdmin, async (req, res) => {
  const date = new Date();
  var y = date.getFullYear();
  const lastYear = new Date(date.setFullYear(y - 1));

  try {
    const data = await User.aggregate([
      {
        $match: { createdAt: { $gte: lastYear } },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch {
    res.status(500).json(err);
  }
});

module.exports = router;
