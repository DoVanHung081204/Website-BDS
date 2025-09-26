// src/components/Listing.js
import React from "react";
import "./Listing.css"; // bạn sẽ tạo file css này

function Listing() {
  return (
    <div className="listing">
      <h2>Bất động sản nổi bật</h2>
      <div className="listing-items">
        <div className="listing-item">
          <img src="can-ho-q7.jpg" alt="Căn hộ quận 7, TPHCM" />
          <h3>Căn hộ Quận 7</h3>
          <p>Giá: 4.2 tỷ</p>
        </div>
        <div className="listing-item">
          <img src="https://via.placeholder.com/300x200" alt="Nhà 2" />
          <h3>Căn hộ Quận 7</h3>
          <p>Giá: 2 tỷ</p>
        </div>
      </div>
    </div>
  );
}

export default Listing;
