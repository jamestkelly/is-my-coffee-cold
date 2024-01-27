import { switchThemeDuration } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./ui/theme/themeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "is-my-coffee-cold",
  description:
    "A simple full-stack web application built to calculate the amount of time you have until your coffee goes cold.",
};

export default function LocaleLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <body
        className={`${inter.className} bg-white-primary dark:bg-primary-1 ${switchThemeDuration}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
