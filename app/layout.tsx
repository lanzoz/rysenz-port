import type { Metadata } from "next";
import "./globals.css";
import NAV from "./components/nav"

export const metadata: Metadata = {
  title: "Puttiphong Sripanphing",
  description: "Minecraft pixelartist/developer/artist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NAV />
        {children}
      </body>
    </html>
  );
}
