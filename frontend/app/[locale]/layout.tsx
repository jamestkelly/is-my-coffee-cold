import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./ui/footer/footer";
import Header from "./ui/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "is-my-coffee-cold",
  description:
    "A simple full-stack web application built to calculate the amount of time you have until your coffee goes cold.",
};

export default function LocaleLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <div className="flex flex-col h-screen justify-between bg-white-primary">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
