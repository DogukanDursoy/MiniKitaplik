import React from "react";
import KitapKarti from "./KitapKarti";

function KitapListe({ kitaplar, aramaMetni, kategori, favoriler, setFavoriler }) {
  const filtrelenmisKitaplar = kitaplar.filter((kitap) => {
    const metinUygun =
      kitap.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
      kitap.yazar.toLowerCase().includes(aramaMetni.toLowerCase());
    const kategoriUygun = kategori === "" || kitap.kategori === kategori;
    return metinUygun && kategoriUygun;
  });

  return (
    <div>
      {filtrelenmisKitaplar.map((kitap) => (
        <KitapKarti
          key={kitap.id}
          {...kitap}
          favorideMi={favoriler.includes(kitap.id)}
          setFavoriler={setFavoriler}
        />
      ))}
    </div>
  );
}

export default KitapListe;
