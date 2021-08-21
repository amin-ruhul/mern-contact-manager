const express = require("express");
const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const auth = require("../middlewares/auth");
const router = express.Router();

// get login user
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json({ user });
  } catch (error) {
    console.log(error.message);
    res.send(500).json({ message: "server error" });
  }
});

// login
router.post(
  "/",
  [
    check("email", "Enter a valid email").isEmail(),
    check("password", "Password is require").exists(),
  ],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }
    const { email, password } = req.body;
    let user = await User.findOne({ email });

    if (!user) return res.status(400).json({ error: "Invalid credential" });
    const isMatchPass = await bcrypt.compare(password, user.password);
    if (!isMatchPass)
      return res.status(400).json({ error: "Invalid credential" });

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
        res.send({ token });
      }
    );
  }
);

module.exports = router;
