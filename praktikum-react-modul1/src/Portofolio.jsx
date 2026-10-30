import KartuProyek from './KartuProyek';
import StatKartu from './StatKartu';
import { daftarProyek } from './data';

const jumlahProyek = daftarProyek.length;
const teknologiUnik = new Set(daftarProyek.flatMap((p) => p.teknologi)).size;

function Portofolio() {
  return (
    <section>
      <div className="statistik">
        <StatKartu angka={jumlahProyek} label="Proyek" />
        <StatKartu angka={teknologiUnik} label="Teknologi" />
        <StatKartu angka="React" label="Fokus Belajar" />
      </div>

      <div className="judul-halaman">
        <h2>✨ Showcase Portofolio Mini ✨</h2>
        <p>Kumpulan proyek yang pernah saya kerjakan</p>
      </div>

      <div className="grid-proyek">
        {daftarProyek.map((proyek, index) => (
          <KartuProyek key={proyek.id} nomor={index} {...proyek} />
        ))}
      </div>
    </section>
  );
}

export default Portofolio;