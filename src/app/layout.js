import { Inter } from "next/font/google";

import { Providers } from "./providers";
import "./globals.css";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Project management system",
  description: "A website to manage my projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers>
          <div className="flex">
            <Navigation />
            <main className="min-h-screen overflow-x-hidden flex flex-1 min-w-0 flex-col items-center p-6  mx-auto max-w-7xl">
              <Header />
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
