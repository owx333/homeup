import type { Metadata } from "next";
import { Archivo_Black, Manrope, Noto_Sans_SC } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const display = Archivo_Black({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const notoSc = Noto_Sans_SC({
  variable: "--font-zh",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.guanzun.my/homeup"),
  title: "HomeUP | One-Stop Renovation & Property Solutions",
  description:
    "Design & Build Renovation and Property Management in Klang Valley. Interior design, custom carpentry, Reno-to-Rent, and rental management. 巴生谷一站式装修与物业管理。",
  icons: {
    icon: "/brand/logo.png",
    apple: "/brand/logo.png",
  },
  openGraph: {
    title: "HomeUP | One-Stop Renovation & Property Solutions",
    description:
      "Helping homeowners & investors create move-in or rental-ready homes across the Klang Valley.",
    type: "website",
    locale: "en_MY",
    images: ["/brand/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${notoSc.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-ink font-sans text-mist">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
