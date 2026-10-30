function Hero({ nama, npm, prodi, kelas }) {
  return (
    <header className="hero">
      <div className="avatar">{nama.charAt(0)}</div>
      <div>
        <h1>Halo, saya <span className="gradasi">{nama}</span> 👋</h1>
        <p>NPM: {npm}</p>
        <p>{prodi}</p>
        <span className="lencana">{kelas}</span>
      </div>
    </header>
  );
}

export default Hero;