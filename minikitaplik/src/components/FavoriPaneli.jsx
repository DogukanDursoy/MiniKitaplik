import React from "react";

function FavoriPaneli({ favoriler, kitaplar, setFavoriler }) {
  const favoriKitaplar = kitaplar.filter((kitap) => favoriler.includes(kitap.id));

  const removeFavori = (id) => {
    setFavoriler((prev) => prev.filter((kitapId) => kitapId !== id));
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h2>Favoriler ({favoriKitaplar.length})</h2>
      {favoriKitaplar.length === 0 && <p>Henüz favori kitap yok.</p>}
      <ul>
        {favoriKitaplar.map((kitap) => (
          <li key={kitap.id} style={{ marginBottom: "5px" }}>
            {kitap.baslik} - {kitap.yazar}{" "}
            <button
              onClick={() => removeFavori(kitap.id)}
              style={{
                marginLeft: "10px",
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                borderRadius: "5px",
                padding: "2px 6px",
                cursor: "pointer",
              }}
            >
              Çıkar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriPaneli;
