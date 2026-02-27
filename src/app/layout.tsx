import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Just Handled - Trucking Accounting Software",
  description: "Automated bookkeeping and financial reporting built specifically for trucking companies. Stop wrestling with spreadsheets and stay audit-ready.",
  keywords: ["trucking accounting", "owner operator software", "freight bookkeeping", "trucking finance", "IFTA tracking", "trucking tax software"],
  authors: [{ name: "Just Handled" }],
  creator: "Just Handled",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://justhandled.com",
    title: "Just Handled - The Complete Financial Framework for Trucking",
    description: "Automated bookkeeping and financial reporting built specifically for trucking companies.",
    siteName: "Just Handled",
  },
  twitter: {
    card: "summary_large_image",
    title: "Just Handled - Trucking Accounting Software",
    description: "Clean, accurate financial reports for trucking companies—automatically.",
    creator: "@justhandled",
  },
  alternates: {
    canonical: "https://justhandled.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
