import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header/Header';

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
      <head>
        {/* Añade FontAwesome para los iconos */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="">{children}</main>
      </body>
    </html>
  );
}