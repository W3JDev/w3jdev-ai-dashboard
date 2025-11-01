import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "W3JDev AI Dashboard - Multi-AI Autonomous System",
  description: "8 Specialized AI Agents Managing 130+ Repositories, Generating Revenue 24/7",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}