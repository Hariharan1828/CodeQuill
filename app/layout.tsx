import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Providers} from "./provider"
import { Header } from "@/components/header";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodeQuill",
  description: "Pair programming application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark:bg-black">
      <body className={inter.className}>
      <NextTopLoader />
        <Providers>
          <Header/>
        {children} 
        </Providers>
        
      </body>
    </html>
  );
}
