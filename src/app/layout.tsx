import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Izumi Restaurant & Lounge | Kampala's Finest Pan-Asian Dining",
    template: "%s | Izumi Restaurant & Lounge",
  },
  description:
    "Kampala's premier Pan-Asian restaurant & lounge. Authentic Japanese sushi, Thai cuisine, live teppanyaki and elegant dining in Kololo. Reserve your table.",
  keywords: [
    "Izumi Restaurant",
    "Kampala sushi",
    "Pan-Asian",
    "Japanese restaurant Uganda",
    "Kololo dining",
    "teppanyaki Kampala",
  ],
  openGraph: {
    title: "Izumi Restaurant & Lounge",
    description: "The finest Pan-Asian Restaurant & Lounge in Kampala.",
    type: "website",
    locale: "en_UG",
  },
  icons: {
    icon: "/images/menu-cover.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
