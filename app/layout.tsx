import NavBar from "@/common/ui/NavBar";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Audiolux",
  description:
    "Audiolux is a E-commerce website that sells audio products especially Apple AirPods Pro Products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased `}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
