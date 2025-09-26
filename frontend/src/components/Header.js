import React from "react";
import { FaHome, FaBuilding, FaNewspaper, FaRegEdit, FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">🏠 BĐS Phú Cát</div>
      <nav className="header__nav">
        <a href="/"><FaHome /> Nhà đất bán</a>
        <a href="/cho-thue"><FaBuilding /> Nhà đất cho thuê</a>
        <a href="/du-an"><MdWork /> Dự án</a>
        <a href="/tin-tuc"><FaNewspaper /> Tin tức</a>
        <a href="/dang-tin"><FaRegEdit /> Đăng Tin</a>
      </nav>
      <div className="header__user">
  <a href="/login.html">
    <i className="bx bx-user"></i> Tài khoản
  </a>
</div>

    </header>
  );
}

export default Header;
