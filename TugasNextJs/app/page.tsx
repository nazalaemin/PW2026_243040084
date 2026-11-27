import Link from "next/link";
import { daftarUkm } from "@/app/data/ukm";

export default function Beranda() {
  return (
    <div className="space-y-12">
      <section className="overflow-hidden rounded-2xl bg-slate-900 px-6 py-12 text-white shadow-lg sm:px-12 sm:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
          Temukan komunitasmu
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          Kembangkan minat, temukan teman, dan tumbuh bersama.
        </h1>
        <p className="mt-5 max-w-2xl leading-7 text-slate-300">
          Jelajahi Unit Kegiatan Mahasiswa di kampus dan temukan ruang untuk
          belajar, berkarya, serta berkontribusi.
        </p>
        <Link
          href="/ukm"
          className="mt-8 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
        >
          Jelajahi UKM
        </Link>
      </section>

      <section aria-labelledby="ukm-unggulan">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-blue-700">Komunitas kampus</p>
            <h2 id="ukm-unggulan" className="mt-1 text-2xl font-bold">
              Kenali beberapa UKM
            </h2>
          </div>
          <Link
            href="/ukm"
            className="text-sm font-semibold text-slate-600 hover:text-slate-900"
          >
            Lihat semua UKM →
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {daftarUkm.slice(0, 3).map((ukm) => (
            <Link
              key={ukm.id}
              href={`/ukm/${ukm.id}`}
              className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-4xl" aria-hidden="true">
                {ukm.ikon}
              </span>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-blue-700">
                {ukm.kategori}
              </p>
              <h3 className="mt-1 text-lg font-bold">{ukm.nama}</h3>
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
                {ukm.deskripsi}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
