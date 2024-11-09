import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import{Libre_Bodoni, Rye} from "next/font/google";


const libre_bodoni = Libre_Bodoni ({ subsets:["latin"], weight:["400", "700"] });
const rye = Rye ({ subsets:["latin"], weight:["400"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={libre_bodoni.className}>
        <Header font = {rye} />
        
        
        {children}
      </body>
    </html>
  );
}
