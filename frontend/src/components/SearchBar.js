import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  const [priceType, setPriceType] = useState("");

  return (
    <div className="search-bar">
      <div className="search-type">
        <button className="active">Bán</button>
        <button>Cho thuê</button>
      </div>

      <div className="search-fields">
        <select>
          <option>Loại BĐS</option>
          <option>Căn hộ</option>
          <option>Nhà phố</option>
          <option>Đất nền</option>
        </select>

        <select>
          <option>Tỉnh / Thành</option>
          <option>Hà Nội</option>
          <option>TPHCM</option>
        </select>

        <select>
          <option>Quận / Huyện</option>
        </select>

        <select>
          <option>Diện tích</option>
          <option>Dưới 100 m²</option>
          <option>100-200 m²</option>
        </select>

        {/* Giá */}
        <select
          onChange={(e) => setPriceType(e.target.value)}
          defaultValue=""
        >
          <option value="">Giá</option>
          <option value="0-1000000000">Dưới 1 tỷ</option>
          <option value="1000000000-3000000000">1 - 3 tỷ</option>
          <option value="3000000000-5000000000">3 - 5 tỷ</option>
          <option value="5000000000-10000000000">5 - 10 tỷ</option>
          <option value="custom">Tùy chọn</option>
        </select>

        {/* Nếu chọn Tùy chọn thì hiện nhập khoảng giá */}
        {priceType === "custom" && (
          <div className="custom-price">
            <input
              type="number"
              placeholder="Giá từ (VNĐ)"
              min="0"
              step="1000000"
            />
            <input
              type="number"
              placeholder="Đến (VNĐ)"
              min="0"
              step="1000000"
            />
          </div>
        )}

        <button>Tìm kiếm</button>
      </div>
    </div>
  );
}

export default SearchBar;
