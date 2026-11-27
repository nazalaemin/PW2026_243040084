import FilterBuku from "@/app/components/FilterBuku";
import { daftarBuku } from "@/app/data/buku";

export default function KatalogBuku() {
  return (
    <section>
      <p className="text-sm font-medium text-blue-700">Koleksi BacaKampus</p>
      <h1 className="mt-1 text-3xl font-bold">Katalog Buku</h1>
      <p className="mt-3 max-w-2xl leading-7 text-slate-600">
        Jelajahi koleksi buku perpustakaan mini Teknik Informatika berdasarkan
        kategori dan periksa ketersediaannya.
      </p>
      <div className="mt-8">
        <FilterBuku daftar={daftarBuku} />
      </div>
    </section>
  );
}
