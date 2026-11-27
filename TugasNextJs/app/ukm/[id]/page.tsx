import Link from "next/link";
import { notFound } from "next/navigation";
import TombolDaftar from "@/app/components/TombolDaftar";
import { daftarUkm } from "@/app/data/ukm";

export function generateStaticParams() {
  return daftarUkm.map((ukm) => ({ id: ukm.id }));
}

export default async function DetailUkm({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const ukm = daftarUkm.find((item) => item.id === id);

  if (!ukm) {
    notFound();
  }

  return (
    <section>
      <Link
        href="/ukm"
        className="mb-5 inline-flex text-sm font-semibold text-slate-600 transition hover:text-slate-900"
      >
        ← Kembali ke Direktori UKM
      </Link>

      <article className="rounded-2xl bg-white p-6 shadow-sm sm:p-10">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            {ukm.kategori}
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            {ukm.jumlahAnggota} anggota
          </span>
        </div>
        <div className="mt-7 flex flex-col gap-5 sm:flex-row sm:items-center">
          <div
            aria-hidden="true"
            className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-6xl"
          >
            {ukm.ikon}
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">{ukm.nama}</h2>
            <p className="mt-2 text-slate-600">Ketua: {ukm.ketua}</p>
          </div>
        </div>
        <p className="mt-7 leading-7 text-slate-700">{ukm.deskripsi}</p>
        <dl className="mt-7 grid gap-5 border-t border-slate-200 pt-6 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-semibold text-slate-900">
              Jadwal Kegiatan
            </dt>
            <dd className="mt-1 text-sm leading-6 text-slate-600">
              {ukm.jadwalLatihan}
            </dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-slate-900">Lokasi</dt>
            <dd className="mt-1 text-sm leading-6 text-slate-600">
              {ukm.lokasi}
            </dd>
          </div>
        </dl>
        <div className="mt-8">
          <TombolDaftar jumlahAwal={ukm.jumlahAnggota} />
        </div>
      </article>
    </section>
  );
}
