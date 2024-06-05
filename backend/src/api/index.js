const express = require("express");
const { register } = require("../controllers/register.controller");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Welcome, use endpont /register to try",
  });
});

router.use("/register", register);

module.exports = router;
