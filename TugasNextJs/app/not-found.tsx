import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl rounded-2xl bg-white px-6 py-12 text-center shadow-sm sm:px-10">
      <p className="text-sm font-bold uppercase tracking-widest text-blue-700">
        404
      </p>
      <h1 className="mt-3 text-3xl font-bold">
        404 - Halaman Tidak Ditemukan
      </h1>
      <p className="mt-3 leading-7 text-slate-600">
        Maaf, halaman atau buku yang kamu cari tidak dapat ditemukan.
      </p>
      <Link
        href="/"
        className="mt-7 inline-flex rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
      >
        Kembali ke Beranda
      </Link>
    </section>
  );
}
