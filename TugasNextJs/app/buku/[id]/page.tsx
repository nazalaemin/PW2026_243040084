import Link from "next/link";
import { notFound } from "next/navigation";
import TombolSimpan from "@/app/components/TombolSimpan";
import { daftarBuku } from "@/app/data/buku";

export function generateStaticParams() {
  return daftarBuku.map((buku) => ({ id: buku.id }));
}

export default async function DetailBuku({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const buku = daftarBuku.find((item) => item.id === id);

  if (!buku) {
    notFound();
  }

  return (
    <section>
      <Link
        href="/buku"
        className="mb-6 inline-flex text-sm font-semibold text-slate-600 transition hover:text-slate-900"
      >
        ← Kembali ke Katalog Buku
      </Link>

      <article className="rounded-2xl bg-white p-6 shadow-md sm:p-10">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
            {buku.kategori}
          </span>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              buku.tersedia
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {buku.tersedia ? "Tersedia" : "Dipinjam"}
          </span>
        </div>

        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
          <div
            aria-hidden="true"
            className="flex h-32 w-32 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-6xl"
          >
            {buku.ikon}
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {buku.judul}
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              {buku.penulis} · Terbit {buku.tahun}
            </p>
          </div>
        </div>

        <p className="mt-8 leading-7 text-slate-700">{buku.deskripsi}</p>
        <p className="mt-5 text-slate-700">
          <strong className="font-semibold text-slate-900">Lokasi Rak:</strong>{" "}
          {buku.lokasiRak}
        </p>

        <div className="mt-8">
          <TombolSimpan
            judul={buku.judul}
            jumlahAwal={buku.jumlahPenyimpan}
          />
        </div>
      </article>
    </section>
  );
}