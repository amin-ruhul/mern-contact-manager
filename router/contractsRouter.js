const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.json({ message: "Post contracts" });
});

module.exports = router;
