import React from "react";
import "./ListingsSection.css";

function ListingsSection({ title, listings }) {
  const fallbackImage = "/images/no-image.jpg";

  return (
    <section className="listings-section">
      <h2>{title}</h2>
      <div className="listings-grid">
        {listings && listings.length > 0 ? (
          listings.map((it) => (
            <div key={it.id} className="listing-card">
              <img
                src={it.image ? `/images/${it.image}` : fallbackImage}
                alt={it.title}
                onError={(e) => (e.target.style.display = "none")}
              />

              <div className="listing-info">
                <h3>{it.title}</h3>
                <p>
                  <strong>Giá:</strong> {parseInt(it.price).toLocaleString()} ₫
                </p>
                <p>
                  <strong>Vị trí:</strong> {it.location}
                </p>
                <p>{it.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-data">Không có tin đăng nào.</p>
        )}
      </div>
    </section>
  );
}

export default ListingsSection;
