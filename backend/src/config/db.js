const mysql = require("mysql2");

// Tạo kết nối
const db = mysql.createConnection({
  host: "localhost",   // hoặc 127.0.0.1
  user: "root",        // user của MySQL (thường là root)
  password: "Hung081204@",        // nhập mật khẩu MySQL của bạn
  database: "DB1" // database mình vừa tạo
});

// Kiểm tra kết nối
db.connect((err) => {
  if (err) {
    console.error("❌ Kết nối MySQL thất bại:", err);
    return;
  }
  console.log("✅ Kết nối MySQL thành công!");
});

module.exports = db;
