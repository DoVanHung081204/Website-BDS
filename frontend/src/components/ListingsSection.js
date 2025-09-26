import React from "react";
import "./ListingsSection.css";

function ListingsSection({ title, listings }) {
  return (
    <section className="listings-section">
      <h2>{title}</h2>
      <div className="listings-grid">
        {listings.map((it) => (
          <div key={it.id} className="listing-card">
            <img src={it.image} alt={it.title} />
            <div className="listing-info">
              <h3>{it.title}</h3>
              <p>{it.price}</p>
              <p>{it.area}</p>
              <p>{it.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ListingsSection;
