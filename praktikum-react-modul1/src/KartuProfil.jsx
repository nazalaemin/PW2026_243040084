function KartuProfil({ nama, npm, kelas, status }) {
  return (
    <div className="profil">
      <div className="avatar">{nama.charAt(0)}</div>
      <div>
        <h3>{nama}</h3>
        <p>NPM: <strong>{npm}</strong></p>
        <p>Kelas: {kelas}</p>
        <span className={`status ${status === 'Aktif' ? 'aktif' : 'nonaktif'}`}>
          Status Akademik: {status}
        </span>
      </div>
    </div>
  );
}

export default KartuProfil;