const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Test API
app.get("/test", (req, res) => {
    res.json({ message: "Smart Tourist Backend Running 🚀" });
});

// Tourist Registration API
app.post("/register", (req, res) => {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
        return res.status(400).json({ message: "All fields are required" });
    }

    res.json({
        message: "Tourist Registered Successfully ✅",
        data: { name, email, phone }
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});