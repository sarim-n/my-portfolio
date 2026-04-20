import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sarim Ahmed N | AI & Data Science Portfolio",
  description: "Computer Science student specializing in Machine Learning, Computer Vision, and Automated Systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}