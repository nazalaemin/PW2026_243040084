function BadgeSkill({ namaSkill, level }) {
  return (
    <span className={`badge badge-${level.toLowerCase()}`}>
      {namaSkill} · {level}
    </span>
  );
}

export default BadgeSkill;