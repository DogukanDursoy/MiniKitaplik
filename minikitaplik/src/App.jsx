import React, { useState, useEffect } from "react";
import kitaplar from "./data/kitaplar";
import AramaCubugu from "./components/AramaCubugu";
import KategoriFiltre from "./components/KategoriFiltre";
import KitapListe from "./components/KitapListe";
import FavoriPaneli from "./components/FavoriPaneli";

function App() {
  const [aramaMetni, setAramaMetni] = useState(
    localStorage.getItem("aramaMetni") || ""
  );
  const [kategori, setKategori] = useState(
    localStorage.getItem("kategori") || ""
  );
  const [favoriler, setFavoriler] = useState(
    JSON.parse(localStorage.getItem("favoriler")) || []
  );

  useEffect(() => {
    localStorage.setItem("aramaMetni", aramaMetni);
    localStorage.setItem("kategori", kategori);
    localStorage.setItem("favoriler", JSON.stringify(favoriler));
  }, [aramaMetni, kategori, favoriler]);

  return (
    <div>
      <h1>Mini Kitaplık</h1>
      <AramaCubugu aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />
      <KategoriFiltre kategori={kategori} setKategori={setKategori} />
      <FavoriPaneli
        favoriler={favoriler}
        kitaplar={kitaplar}
        setFavoriler={setFavoriler}
      />
      <KitapListe
        kitaplar={kitaplar}
        aramaMetni={aramaMetni}
        kategori={kategori}
        favoriler={favoriler}
        setFavoriler={setFavoriler}
      />
    </div>
  );
}

export default App;
