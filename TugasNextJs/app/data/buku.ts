export type KategoriBuku =
  | "Pemrograman"
  | "Web"
  | "UI/UX"
  | "Sistem"
  | "Umum";

export interface Buku {
  id: string;
  judul: string;
  penulis: string;
  kategori: KategoriBuku;
  tahun: number;
  deskripsi: string;
  tersedia: boolean;
  lokasiRak: string;
  ikon: string;
  jumlahPenyimpan: number;
}

export const daftarBuku: Buku[] = [
  {
    id: "clean-code",
    judul: "Clean Code",
    penulis: "Robert C. Martin",
    kategori: "Pemrograman",
    tahun: 2008,
    deskripsi:
      "Panduan praktis menulis kode yang rapi, mudah dibaca, dan gampang dirawat oleh tim developer.",
    tersedia: true,
    lokasiRak: "Rak A-01 (Lantai 1 - Area Pemrograman)",
    ikon: "📘",
    jumlahPenyimpan: 0,
  },
  {
    id: "pragmatic-programmer",
    judul: "The Pragmatic Programmer",
    penulis: "Andrew Hunt & David Thomas",
    kategori: "Pemrograman",
    tahun: 1999,
    deskripsi:
      "Kumpulan prinsip dan praktik untuk membantu developer bekerja lebih efektif, beradaptasi, dan menghasilkan perangkat lunak berkualitas.",
    tersedia: true,
    lokasiRak: "Rak A-02 (Lantai 1 - Area Pemrograman)",
    ikon: "📗",
    jumlahPenyimpan: 0,
  },
  {
    id: "eloquent-javascript",
    judul: "Eloquent JavaScript",
    penulis: "Marijn Haverbeke",
    kategori: "Web",
    tahun: 2018,
    deskripsi:
      "Pengantar JavaScript dan konsep pemrograman melalui contoh, latihan, serta proyek pengembangan web.",
    tersedia: false,
    lokasiRak: "Rak B-03 (Lantai 1 - Area Web)",
    ikon: "📙",
    jumlahPenyimpan: 0,
  },
  {
    id: "dont-make-me-think",
    judul: "Don't Make Me Think",
    penulis: "Steve Krug",
    kategori: "UI/UX",
    tahun: 2014,
    deskripsi:
      "Panduan ringkas tentang usability dan cara merancang pengalaman web yang mudah dipahami pengguna.",
    tersedia: true,
    lokasiRak: "Rak C-01 (Lantai 2 - Area Desain)",
    ikon: "🎨",
    jumlahPenyimpan: 0,
  },
  {
    id: "operating-system-concepts",
    judul: "Operating System Concepts",
    penulis: "Abraham Silberschatz, Peter B. Galvin, dan Greg Gagne",
    kategori: "Sistem",
    tahun: 2018,
    deskripsi:
      "Pembahasan konsep utama sistem operasi, proses, memori, penyimpanan, dan keamanan komputer.",
    tersedia: true,
    lokasiRak: "Rak D-01 (Lantai 2 - Area Sistem Komputer)",
    ikon: "🖥️",
    jumlahPenyimpan: 0,
  },
  {
    id: "atomic-habits",
    judul: "Atomic Habits",
    penulis: "James Clear",
    kategori: "Umum",
    tahun: 2018,
    deskripsi:
      "Panduan membangun kebiasaan baik melalui perubahan kecil yang dilakukan secara konsisten.",
    tersedia: true,
    lokasiRak: "Rak E-01 (Lantai 2 - Area Umum)",
    ikon: "📚",
    jumlahPenyimpan: 0,
  },
  {
    id: "you-dont-know-js-yet",
    judul: "You Don't Know JS Yet",
    penulis: "Kyle Simpson",
    kategori: "Web",
    tahun: 2020,
    deskripsi:
      "Seri pembelajaran mendalam mengenai JavaScript modern, mulai dari dasar bahasa hingga cakupan dan objek.",
    tersedia: true,
    lokasiRak: "Rak B-04 (Lantai 1 - Area Web)",
    ikon: "🌐",
    jumlahPenyimpan: 0,
  },
  {
    id: "design-of-everyday-things",
    judul: "The Design of Everyday Things",
    penulis: "Don Norman",
    kategori: "UI/UX",
    tahun: 2013,
    deskripsi:
      "Buku tentang prinsip desain berpusat pada manusia untuk membuat produk lebih mudah dipahami dan digunakan.",
    tersedia: false,
    lokasiRak: "Rak C-02 (Lantai 2 - Area Desain)",
    ikon: "✏️",
    jumlahPenyimpan: 0,
  },
];
