const express = require("express");
const router = express.Router();

// model
const Insta = require("../../models/Insta");

router.get("/", (req, res) => {
  return res.json({ msg: "connected successfully" });
});

exports.module = router;
