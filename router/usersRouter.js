const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.json({ message: "user Register" });
});

module.exports = router;
