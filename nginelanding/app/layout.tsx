import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";

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
          <Header />
          <div className="flex flex-col items-center">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
