import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const importedFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "@hc-huxai: PIAIC-Q2-07",
  description: "Assignment: Use of Grid Layout for UI Designing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={importedFont.className}>{children}</body>
    </html>
  );
}
