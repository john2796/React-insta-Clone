const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    msg: "success connected"
  });
});

module.exports = router;
