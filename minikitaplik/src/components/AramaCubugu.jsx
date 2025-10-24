import React from "react";

function AramaCubugu({ aramaMetni, setAramaMetni }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Kitap veya yazar ara..."
        value={aramaMetni}
        onChange={(e) => setAramaMetni(e.target.value)}
        style={{
          padding: "8px",
          width: "60%",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}

export default AramaCubugu;
