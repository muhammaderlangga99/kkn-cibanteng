import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import Nav from "@/components/atom/layout/navbar";
import Theme from "@/components/ui/theme";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${GeistSans.className}`}>
        <Theme>
          <Nav />
          {children}
        </Theme>
      </body>
    </html>
  );
}

