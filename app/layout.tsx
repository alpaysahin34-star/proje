import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seller Command Center",
  description: "E-ticaret satıcıları için gelişmiş operasyon, karlılık ve otomasyon paneli.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
