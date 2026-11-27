import FilterUkm from "@/app/components/FilterUkm";
import { daftarUkm } from "@/app/data/ukm";

export default function DaftarUkm() {
  return (
    <section aria-labelledby="daftar-ukm">
      <div className="mb-6">
        <h2 id="daftar-ukm" className="text-2xl font-bold">
          Jelajahi Unit Kegiatan Mahasiswa
        </h2>
        <p className="mt-2 text-slate-600">
          Pilih kategori untuk menemukan UKM sesuai minatmu.
        </p>
      </div>
      <FilterUkm daftar={daftarUkm} />
    </section>
  );
}
