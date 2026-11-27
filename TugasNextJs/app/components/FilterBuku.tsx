"use client";

import Link from "next/link";
import { useState } from "react";
import type { Buku, KategoriBuku } from "@/app/data/buku";

const kategoriFilter: Array<"Semua" | KategoriBuku> = [
  "Semua",
  "Pemrograman",
  "Web",
  "UI/UX",
  "Sistem",
  "Umum",
];

export default function FilterBuku({ daftar }: { daftar: Buku[] }) {
  const [kategoriTerpilih, setKategoriTerpilih] = useState<
    "Semua" | KategoriBuku
  >("Semua");
  const bukuTersaring =
    kategoriTerpilih === "Semua"
      ? daftar
      : daftar.filter((buku) => buku.kategori === kategoriTerpilih);

  return (
    <div>
      <div className="mb-5 flex flex-wrap gap-2" aria-label="Filter kategori buku">
        {kategoriFilter.map((kategori) => {
          const aktif = kategoriTerpilih === kategori;

          return (
            <button
              key={kategori}
              type="button"
              onClick={() => setKategoriTerpilih(kategori)}
              aria-pressed={aktif}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                aktif
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-300 bg-white text-slate-700 hover:bg-slate-100"
              }`}
            >
              {kategori}
            </button>
          );
        })}
      </div>

      <p className="mb-4 text-sm text-slate-600" aria-live="polite">
        Menampilkan {bukuTersaring.length} buku
      </p>

      {bukuTersaring.length > 0 ? (
        <ul className="space-y-4">
          {bukuTersaring.map((buku) => (
            <li
              key={buku.id}
              className="rounded-2xl bg-white shadow-sm transition hover:shadow-md"
            >
              <Link
                href={`/buku/${buku.id}`}
                className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center"
              >
                <span
                  aria-hidden="true"
                  className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-4xl"
                >
                  {buku.ikon}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-lg font-bold text-slate-900">
                    {buku.judul}
                  </span>
                  <span className="mt-1 block text-sm text-slate-600">
                    {buku.penulis}
                  </span>
                  <span className="mt-3 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {buku.kategori}
                  </span>
                </span>
                <span
                  className={`shrink-0 text-sm font-semibold ${
                    buku.tersedia ? "text-green-700" : "text-red-700"
                  }`}
                >
                  {buku.tersedia ? "Tersedia" : "Dipinjam"}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="rounded-2xl bg-white p-6 text-slate-600 shadow-sm">
          Belum ada buku di kategori ini.
        </p>
      )}
    </div>
  );
}
