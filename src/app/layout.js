import { Inter } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Project management system",
  description: "A website to manage my projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="flex">
        <Sidebar />
        <main className="min-h-screen flex flex-1 flex-col items-center">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
