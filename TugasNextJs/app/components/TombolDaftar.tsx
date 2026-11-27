"use client";

import { useState } from "react";

export default function TombolDaftar({
  jumlahAwal,
}: {
  jumlahAwal: number;
}) {
  const [terdaftar, setTerdaftar] = useState(false);
  const jumlahPeminat = jumlahAwal + (terdaftar ? 1 : 0);

  return (
    <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
      <button
        type="button"
        onClick={() => setTerdaftar((sebelumnya) => !sebelumnya)}
        className={`rounded-lg px-5 py-3 text-sm font-semibold text-white transition ${
          terdaftar
            ? "bg-emerald-600 hover:bg-emerald-700"
            : "bg-slate-900 hover:bg-slate-700"
        }`}
      >
        {terdaftar ? "Terdaftar" : "Daftar Anggota"}
      </button>
      <p className="text-sm text-slate-600">
        {jumlahPeminat} peminat UKM ini
      </p>
    </div>
  );
}
