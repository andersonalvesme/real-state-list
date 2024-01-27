import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Listings Page",
  description: "Real Estate Lis+ng web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${roboto.className} text-sm font-normal`}>
    <div className="container max-w-screen-lg md:mx-auto">
      {children}
    </div>
    </body>
    </html>
  );
}
