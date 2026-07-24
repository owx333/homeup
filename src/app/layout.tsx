import type { Metadata } from "next";
import { Archivo_Black, Manrope, Noto_Sans_SC } from "next/font/google";
import { LanguageProvider } from "@/components/LanguageProvider";
import "./globals.css";

const display = Archivo_Black({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const notoSc = Noto_Sans_SC({
  variable: "--font-zh",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.guanzun.my/homeup"),
  title: "HomeUP | One-Stop Renovation & Property Solutions",
  description:
    "Design & Build Renovation and Property Management in Klang Valley. Interior design, custom carpentry, Reno-to-Rent, and rental management. 巴生谷一站式装修与物业管理。",
  icons: {
    icon: [
      { url: `${basePath}/favicon.ico`, sizes: "any" },
      { url: `${basePath}/brand/favicon-32.png`, type: "image/png", sizes: "32x32" },
      { url: `${basePath}/brand/icon-192.png`, type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: `${basePath}/brand/apple-touch-icon.png`, sizes: "180x180" }],
  },
  openGraph: {
    title: "HomeUP | One-Stop Renovation & Property Solutions",
    description:
      "Helping homeowners & investors create move-in or rental-ready homes across the Klang Valley.",
    type: "website",
    locale: "en_MY",
    images: [`${basePath}/brand/logo.png`],
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
