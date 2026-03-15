import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3D Model Viewer",
  description: "Interactive 3D scene with LiquidChrome background",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
