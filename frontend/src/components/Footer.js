import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import { SiZalo } from "react-icons/si"; // có thể dùng cho Zalo
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookF style={{ color: "#1877F2" }} /> Facebook
        </a>
        <a href="https://zalo.me" target="_blank" rel="noreferrer">
          <SiZalo style={{ color: "#0068FF" }} /> Zalo
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <FaYoutube style={{ color: "#FF0000" }} /> YouTube
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram style={{ color: "#E4405F" }} /> Instagram
        </a>
      </div>
      <div className="footer-right">
        © 2025 Bất động sản Online. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
