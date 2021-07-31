const express = require("express");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
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
      return res.status(400).json({ error: error.array() });
    }
    const { name, email, password } = req.body;
    try {
      const dbUser = await User.findOne({ email });
      if (dbUser) {
        return res.status(400).json({ error: "Email already used." });
      }
      const user = new User({ name, email, password });
      const hasPassword = await bcrypt.hash(password, 10);
      user.password = hasPassword;
      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 3600,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      res.status(400).json({ error: "Server error" });
      console.log(error.message);
    }
  }
);

module.exports = router;
