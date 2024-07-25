import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({subsets: ["latin"], weight:['300','400','500', '600', '700', '800']})

export const metadata: Metadata = {
  title: "Embuildr",
  description: "Drag&Drop Email builder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>My Next.js App</title>
        {/* Favicon Links */}
        <link rel="icon" href="/images/embuildr2.png" />
      </Head>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
