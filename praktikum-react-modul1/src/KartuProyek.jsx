function KartuProyek({
  nomor, ikon, judul, deskripsi, kategori, tahun, teknologi, repoUrl, demoUrl,
}) {
  return (
    <div className="kartu" style={{ animationDelay: `${nomor * 0.12}s` }}>
      <div className="kartu-atas">
        <span className="ikon">{ikon}</span>
        <div className="meta">
          <div className="kategori">{kategori}</div>
          <div>{tahun}</div>
        </div>
      </div>

      {/* 1. Judul Proyek */}
      <h3>{judul}</h3>

      {/* 2. Ringkasan Deskripsi */}
      <p>{deskripsi}</p>

      {/* 3. Tagar Teknologi */}
      <div className="tag-wadah">
        {teknologi.map((tech, index) => (
          <span key={tech} className={`tag tag-${index % 4}`}>
            #{tech}
          </span>
        ))}
      </div>

      {/* 4. Tombol Tautan Repositori GitHub (+ Demo jika ada) */}
      <div className="aksi">
        <a className="tombol" href={repoUrl} target="_blank" rel="noreferrer">
          Lihat di GitHub
        </a>
        {demoUrl && (
          <a className="tombol tombol-garis" href={demoUrl} target="_blank" rel="noreferrer">
            Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default KartuProyek;