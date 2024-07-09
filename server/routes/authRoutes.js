const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

router.get("/check", auth.authenticateToken, (req, res) => {
  res.status(200).send("Token is valid");
});

module.exports = router;
