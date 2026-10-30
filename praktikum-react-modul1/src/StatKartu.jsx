function StatKartu({ angka, label }) {
  return (
    <div className="stat">
      <strong>{angka}</strong>
      <span>{label}</span>
    </div>
  );
}

export default StatKartu;