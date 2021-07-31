const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const Contact = require("../models/Contact");
const auth = require("../middlewares/auth");

// get all contact
router.get("/", auth, async (req, res) => {
  try {
    const contracts = await Contact.find({ user: req.user.id });
    res.json(contracts);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "server error" });
  }
});

// add contact

router.post(
  "/",
  [auth, [check("name", "Name is require").not().isEmpty()]],
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ error: error.array() });
    }

    const { name, email, phone, tag } = req.body;
    const contact = new Contact({
      name,
      email,
      phone,
      tag,
      user: req.user.id,
    });

    try {
      const newContact = await contact.save();
      res.json(newContact);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: "server error" });
    }
  }
);

module.exports = router;
