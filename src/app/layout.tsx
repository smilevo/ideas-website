import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-barlow',
});

export const metadata: Metadata = {
  title: "Institute of Data Engineering, Analytics, and Science (IDEAS) | University of Michigan-Flint",
  description: "IDEAS is a partnership of University of Michigan-Flint faculty, students, community groups, local business and government.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody className={barlow.className}>{children}</ClientBody>
    </html>
  );
}
