import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import Nav from "@/components/atom/layout/navbar";
import Theme from "@/components/ui/theme";

const geistSans =  GeistSans;

export const metadata: Metadata = {
  title: "Peta RT. 05 RW. 05",
  description: "Peta RT. 05 RW. 05, Desa Cibanteng",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geistSans.className}>
        <Theme>
          <Nav />
          {children}
        </Theme>
      </body>
    </html>
  );
}

