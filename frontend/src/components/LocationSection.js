import React from "react";
import "./LocationSection.css";

function LocationSection({ locations }) {
  return (
    <section className="location-section">
      <h2>Bất động sản theo địa điểm</h2>
      <div className="locations-grid">
        {locations.map((loc, idx) => (
          <div key={idx} className="loc-card">
            <span>{loc.name}</span>
            <span>+{loc.count} tin</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LocationSection;
