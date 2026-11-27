
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "BacaKampus",
  description: "Perpustakaan Mini Teknik Informatika.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="flex min-h-screen flex-col bg-slate-50 text-slate-900 antialiased">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
          {children}
        </main>
        <footer className="border-t border-slate-200 bg-white px-4 py-5 text-center text-sm text-slate-600">
          BacaKampus © 2026 - Modul 3 Praktikum Pemrograman Web
        </footer>
      </body>
    </html>
  );
}
