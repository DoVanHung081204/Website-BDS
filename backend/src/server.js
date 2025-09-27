const express = require("express");
const cors = require("cors");
const db = require("./config/db");

const app = express();

// ✅ Cho phép frontend (http://localhost:3000) gọi API
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// routes
app.get("/posts", (req, res) => {
  db.query("SELECT * FROM posts", (err, results) => {
    if (err) {
      console.error("❌ Lỗi truy vấn DB:", err);
      return res.status(500).json({ error: "Lỗi server" });
    }
    res.json(results);
  });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
});
