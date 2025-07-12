const express = require("express");
const router = express.Router();
const User = require("../models/user"); // adjust path if needed

// ✅ Test: Insert sample user
router.get("/test-insert", async (req, res) => {
  try {
    const newUser = new User({
      name: "ReWear Test",
      email: "test@rewear.com",
      password: "secret123"
    });

    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
