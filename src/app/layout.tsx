import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* Display — classic fine-dining serif */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

/* Secondary display — elegant for logo & small headings */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

/* Body — refined geometric sans */
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
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
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${outfit.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased font-[family-name:var(--font-outfit)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
