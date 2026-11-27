"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { label: "Beranda", href: "/" },
  { label: "Katalog Buku", href: "/buku" },
  { label: "Tentang", href: "/tentang" },
  { label: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-200 bg-white">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
          BacaKampus
        </Link>
        <ul className="flex flex-wrap gap-2">
          {menu.map((item) => {
            const aktif =
              item.href === "/buku"
                ? pathname.startsWith("/buku")
                : pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={aktif ? "page" : undefined}
                  className={`block rounded-full px-4 py-2 text-sm font-medium transition ${
                    aktif
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
