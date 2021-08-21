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
      res.status(500).json({ error: "server error" });
    }
  }
);

// delete contact
router.delete("/:id", auth, async (req, res) => {
  try {
    await Contact.deleteOne({ _id: req.params.id });
    res.json("Contact Deleted");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "server error" });
  }
});

// update Contact
router.put("/:id", auth, async (req, res) => {
  const { name, email, phone, tag } = req.body;
  const updatedContact = { name, email, phone, tag };
  console.log("Backend:", updatedContact);
  try {
    let contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ msg: "Contact not found" });
    if (contact.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }
    contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { $set: updatedContact },
      { new: true }
    );

    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: "server error" });
  }
});

module.exports = router;
