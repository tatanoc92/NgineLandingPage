import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NgineFitness",
  description: "Take your fitness to the next level!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <Nav />
          <div className="flex items-center flex-grow text-white">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
