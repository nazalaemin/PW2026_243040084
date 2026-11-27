import type { ReactNode } from "react";

export default function UkmLayout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-8">
      <header className="rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
        <p className="text-sm font-semibold text-blue-700">Komunitas kampus</p>
        <h1 className="mt-1 text-3xl font-bold">Direktori UKM</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Pendaftaran anggota baru dibuka setiap semester. Temukan komunitas
          yang cocok dan mulai perjalananmu.
        </p>
      </header>
      {children}
    </div>
  );
}
