import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ListingsSection from "./components/ListingsSection";
import LocationSection from "./components/LocationSection";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const dummyListings = [
    {
      id: 1,
      title: "Căn hộ quận 7, TPHCM",
      price: "4.2 tỷ",
      area: "80 m²",
      location: "Quận 7, TPHCM",
      image: "Anh1.jpg",
    },
    // thêm nhiều tin khác
  ];

  const dummyLocations = [
    { name: "TPHCM", count: "75k" },
    { name: "Hà Nội", count: "55k" },
    { name: "Bình Dương", count: "25k" },
    // ...
  ];

  return (
    <div className="App">
      <Header />
      <div className="main">
        <SearchBar />
        <ListingsSection title="Bất động sản nổi bật" listings={dummyListings} />
        <LocationSection locations={dummyLocations} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
