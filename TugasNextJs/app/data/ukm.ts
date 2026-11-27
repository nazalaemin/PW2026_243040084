export interface Ukm {
  id: string;
  nama: string;
  kategori: "Olahraga" | "Seni" | "Teknologi" | "Sosial";
  deskripsi: string;
  ketua: string;
  jadwalLatihan: string;
  lokasi: string;
  jumlahAnggota: number;
  ikon: string;
}

export const daftarUkm: Ukm[] = [
  {
    id: "basket",
    nama: "UKM Basket",
    kategori: "Olahraga",
    deskripsi:
      "Komunitas basket untuk berlatih teknik, menjaga kebugaran, dan bertanding dengan menjunjung sportivitas.",
    ketua: "Raka Pratama",
    jadwalLatihan: "Selasa dan Kamis, 16.00–18.00",
    lokasi: "Gelanggang Olahraga Kampus",
    jumlahAnggota: 42,
    ikon: "🏀",
  },
  {
    id: "paduan-suara",
    nama: "Paduan Suara Mahasiswa",
    kategori: "Seni",
    deskripsi:
      "Wadah bagi mahasiswa untuk mengembangkan kemampuan vokal dan tampil dalam berbagai acara kampus.",
    ketua: "Nadia Putri",
    jadwalLatihan: "Rabu dan Jumat, 16.00–18.00",
    lokasi: "Ruang Musik Gedung Kesenian",
    jumlahAnggota: 35,
    ikon: "🎶",
  },
  {
    id: "robotik",
    nama: "UKM Robotik",
    kategori: "Teknologi",
    deskripsi:
      "Komunitas yang merancang, merakit, dan memprogram robot melalui proyek kolaboratif dan kompetisi.",
    ketua: "Fajar Ramadhan",
    jadwalLatihan: "Senin dan Rabu, 16.00–18.00",
    lokasi: "Laboratorium Robotika",
    jumlahAnggota: 28,
    ikon: "🤖",
  },
  {
    id: "programming-club",
    nama: "Programming Club",
    kategori: "Teknologi",
    deskripsi:
      "Tempat belajar pemrograman bersama, mengerjakan proyek, serta berlatih memecahkan masalah komputasi.",
    ketua: "Dimas Saputra",
    jadwalLatihan: "Jumat, 15.30–17.30",
    lokasi: "Laboratorium Komputer 2",
    jumlahAnggota: 51,
    ikon: "💻",
  },
  {
    id: "bakti-sosial",
    nama: "Bakti Sosial Mahasiswa",
    kategori: "Sosial",
    deskripsi:
      "Kelompok relawan mahasiswa yang mengadakan kegiatan sosial dan program pemberdayaan masyarakat.",
    ketua: "Alya Maharani",
    jadwalLatihan: "Sabtu, dua kali setiap bulan",
    lokasi: "Sekretariat Organisasi Mahasiswa",
    jumlahAnggota: 39,
    ikon: "🤝",
  },
  {
    id: "fotografi",
    nama: "UKM Fotografi",
    kategori: "Seni",
    deskripsi:
      "Komunitas untuk belajar fotografi, berbagi karya, dan mendokumentasikan cerita kehidupan kampus.",
    ketua: "Bima Aditya",
    jadwalLatihan: "Kamis, 16.00–18.00",
    lokasi: "Studio Kreatif Kampus",
    jumlahAnggota: 31,
    ikon: "📷",
  },
];
