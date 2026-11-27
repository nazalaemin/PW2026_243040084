const jamLayanan = [
  { hari: "Senin–Jumat", waktu: "08.00–16.00 WIB" },
  { hari: "Sabtu", waktu: "08.00–12.00 WIB" },
  { hari: "Minggu dan hari libur", waktu: "Tutup" },
];

export default function KontakPerpustakaan() {
  return (
    <div className="space-y-8">
      <header>
        <p className="text-sm font-semibold text-blue-700">BacaKampus</p>
        <h1 className="mt-1 text-3xl font-bold">Kontak Perpustakaan</h1>
        <p className="mt-3 max-w-2xl leading-7 text-slate-600">
          Hubungi pustakawan atau kunjungi perpustakaan pada jam layanan berikut.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold">Jam Layanan</h2>
          <dl className="mt-5 space-y-4">
            {jamLayanan.map((item) => (
              <div
                key={item.hari}
                className="flex flex-col justify-between gap-1 border-b border-slate-100 pb-3 text-sm sm:flex-row sm:gap-4"
              >
                <dt className="font-medium text-slate-700">{item.hari}</dt>
                <dd className="text-slate-600">{item.waktu}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-bold">Kontak Pustakawan</h2>
          <dl className="mt-5 space-y-4 text-sm">
            <div>
              <dt className="font-medium text-slate-500">Nama pustakawan</dt>
              <dd className="mt-1 text-slate-800">Rina Puspitasari, S.I.Pust.</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-500">Email</dt>
              <dd className="mt-1">
                <a
                  href="mailto:perpustakaan@bacakampus.ac.id"
                  className="text-blue-700 hover:underline"
                >
                  perpustakaan@bacakampus.ac.id
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-slate-500">Telepon / WhatsApp</dt>
              <dd className="mt-1">
                <a
                  href="tel:+62225550123"
                  className="text-blue-700 hover:underline"
                >
                  (022) 555-0123
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-slate-500">Lokasi</dt>
              <dd className="mt-1 text-slate-800">
                Gedung Teknik Informatika Lantai 1
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </div>
  );
}
