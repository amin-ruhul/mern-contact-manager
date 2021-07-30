const express = require("express");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require("../models/User");

router.post(
  "/",
  [
    check("name", "Please enter name").not().isEmpty(),
    check("email", "Please enter valid email").isEmail(),
    check("password", "Please enter more then 5 character").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      res.status(400).json({ error: error.array() });
    } else {
      const { name, email, password } = req.body;
      try {
        const dbUser = await User.findOne({ email });
        if (dbUser) {
          res.status(400).json({ error: "Email already used." });
        } else {
          const user = new User({ name, email, password });
          const hasPassword = await bcrypt.hash(password, 10);
          user.password = hasPassword;
          const newUser = await user.save();
          res.status(200).json({ user: newUser });
        }
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  }
);

module.exports = router;
