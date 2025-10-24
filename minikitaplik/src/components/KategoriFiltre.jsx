import React from "react";

function KategoriFiltre({ kategori, setKategori }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <select
        value={kategori}
        onChange={(e) => setKategori(e.target.value)}
        style={{
          padding: "8px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      >
        <option value="">Tüm Kategoriler</option>
        <option value="Roman">Roman</option>
        <option value="Tiyatro">Tiyatro</option>
        <option value="Destan">Destan</option>
      </select>
    </div>
  );
}

export default KategoriFiltre;
