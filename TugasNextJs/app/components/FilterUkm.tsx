"use client";

import Link from "next/link";
import { useState } from "react";
import type { Ukm } from "@/app/data/ukm";

const kategoriUkm = ["Semua", "Olahraga", "Seni", "Teknologi", "Sosial"] as const;
type KategoriFilter = (typeof kategoriUkm)[number];

export default function FilterUkm({ daftar }: { daftar: Ukm[] }) {
  const [kategoriAktif, setKategoriAktif] = useState<KategoriFilter>("Semua");
  const ukmTersaring =
    kategoriAktif === "Semua"
      ? daftar
      : daftar.filter((ukm) => ukm.kategori === kategoriAktif);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2" aria-label="Filter kategori UKM">
        {kategoriUkm.map((kategori) => (
          <button
            key={kategori}
            type="button"
            onClick={() => setKategoriAktif(kategori)}
            aria-pressed={kategoriAktif === kategori}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              kategoriAktif === kategori
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-600 shadow-sm hover:bg-slate-100"
            }`}
          >
            {kategori}
          </button>
        ))}
      </div>

      {ukmTersaring.length > 0 ? (
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ukmTersaring.map((ukm) => (
            <li key={ukm.id}>
              <Link
                href={`/ukm/${ukm.id}`}
                className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <span className="text-4xl" aria-hidden="true">
                  {ukm.ikon}
                </span>
                <span className="mt-5 text-xs font-semibold uppercase tracking-wide text-blue-700">
                  {ukm.kategori}
                </span>
                <h2 className="mt-1 text-lg font-bold">{ukm.nama}</h2>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                  {ukm.deskripsi}
                </p>
                <p className="mt-5 text-sm font-medium text-slate-500">
                  {ukm.jumlahAnggota} anggota
                </p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="rounded-xl bg-white p-6 text-slate-600 shadow-sm">
          Belum ada UKM dalam kategori ini.
        </p>
      )}
    </div>
  );
}
