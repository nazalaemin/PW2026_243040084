function KartuProyek({ judul, deskripsi, teknologi, repoUrl }) {
  return (
    <div style={{
      border: '1px solid #D0D7DE',
      borderRadius: '10px',
      padding: '20px',
      backgroundColor: '#FFFFFF',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
      {/* 1. Judul Proyek */}
      <h3 style={{ margin: 0, color: '#1B365D' }}>{judul}</h3>

      {/* 2. Ringkasan Deskripsi */}
      <p style={{ margin: 0, fontSize: '14px', color: '#555', lineHeight: 1.5 }}>
        {deskripsi}
      </p>

      {/* 3. Tagar Teknologi */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {teknologi.map((tech) => (
          <span key={tech} style={{
            backgroundColor: '#E8F0FE',
            color: '#1B365D',
            padding: '3px 10px',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: 'bold'
          }}>
            #{tech}
          </span>
        ))}
      </div>

      {/* 4. Tombol Tautan Repositori GitHub */}
      <a
        href={repoUrl}
        target="_blank"
        rel="noreferrer"
        style={{
          alignSelf: 'flex-start',
          backgroundColor: '#1B365D',
          color: '#FFFFFF',
          padding: '8px 16px',
          borderRadius: '6px',
          textDecoration: 'none',
          fontSize: '14px',
          fontWeight: 'bold'
        }}
      >
        Lihat di GitHub
      </a>
    </div>
  );
}
