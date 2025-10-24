import React from "react";

function KitapKarti({ baslik, yazar, kategori, id, favorideMi, setFavoriler }) {
  const toggleFavori = () => {
    if (favorideMi) {
      setFavoriler((prev) => prev.filter((kitapId) => kitapId !== id));
    } else {
      setFavoriler((prev) => [...prev, id]);
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>{baslik}</h3>
      <p>{yazar}</p>
      <p>{kategori}</p>
      <button
        onClick={toggleFavori}
        style={{
          backgroundColor: favorideMi ? "gold" : "#eee",
          border: "none",
          padding: "5px 10px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {favorideMi ? "Favoride" : "Favorilere Ekle"}
      </button>
    </div>
  );
}

export default KitapKarti;
