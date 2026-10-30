function ItemMatkul({ kode, nama, sks, hari }) {
  return (
    <div className="matkul">
      <div>
        <strong>{kode}</strong> - {nama}
        <div className="hari">Jadwal Sesi: {hari}</div>
      </div>
      <span className="sks">{sks} SKS</span>
    </div>
  );
}

export default ItemMatkul;