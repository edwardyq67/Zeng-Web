import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/app/components/Header/Header';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inversiones Bienestar Zeng S.A.C.",
  description: "Empresa líder en comercialización de productos farmacéuticos, productos sanitarios y dispositivos médicos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}