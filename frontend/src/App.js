import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ListingsSection from "./components/ListingsSection";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [listings, setListings] = useState([]);   // ⚡ mặc định [] thay vì null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // ⚡ tránh memory leak / double fetch
    console.log("📡 Gọi API /posts");

    fetch("http://localhost:5000/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Lỗi khi gọi API");
        return res.json();
      })
      .then((data) => {
        if (isMounted) {
          console.log("✅ Nhận dữ liệu:", data);
          setListings(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("❌ Lỗi khi lấy dữ liệu:", err);
        if (isMounted) {
          setError("Không thể tải dữ liệu từ server.");
          setLoading(false);
        }
      });

    return () => {
      isMounted = false; // cleanup để tránh double fetch
    };
  }, []);

  const dummyLocations = [
    { name: "TPHCM", count: "75k" },
    { name: "Hà Nội", count: "55k" },
    { name: "Bình Dương", count: "25k" },
  ];

  return (
    <div className="App">
      <Header />
      <div className="main">
        <SearchBar />
        {loading && <p style={{ textAlign: "center" }}>⏳ Đang tải dữ liệu...</p>}
        {error && <p style={{ textAlign: "center", color: "red" }}>{error}</p>}
        {!loading && !error && (
          <ListingsSection title="Bất động sản nổi bật" listings={listings} />
        )}
        <LocationSection locations={dummyLocations} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
