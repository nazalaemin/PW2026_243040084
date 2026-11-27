"use client";

import { useState } from "react";

interface TombolSimpanProps {
  judul: string;
  jumlahAwal: number;
}

export default function TombolSimpan({
  judul,
  jumlahAwal,
}: TombolSimpanProps) {
  const [disimpan, setDisimpan] = useState(false);
  const jumlah = jumlahAwal + (disimpan ? 1 : 0);

  return (
    <div className="flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center">
      <button
        type="button"
        onClick={() => setDisimpan((sebelumnya) => !sebelumnya)}
        className={`rounded-lg px-5 py-3 text-sm font-semibold text-white transition ${
          disimpan
            ? "bg-emerald-600 hover:bg-emerald-700"
            : "bg-slate-900 hover:bg-slate-700"
        }`}
      >
        {disimpan ? "Tersimpan di Daftar Baca" : "Simpan ke Daftar Baca"}
      </button>
      <p className="text-sm text-slate-600">
        {jumlah} mahasiswa menyimpan{" "}
        <strong className="text-slate-900">{judul}</strong>
      </p>
    </div>
  );
}
