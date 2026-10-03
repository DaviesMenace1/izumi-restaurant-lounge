import type { Metadata } from "next";
import { Staatliches, Josefin_Sans, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* Bauhaus-inspired geometric display (Herbert Bayer / Staatliches) */
const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bauhaus",
  display: "swap",
});

/* Geometric sans companion */
const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin",
  display: "swap",
});

/* Clean body */
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
      className={`${staatliches.variable} ${josefin.variable} ${outfit.variable}`}
    >
      <head>
        {/* Bonny — decorative display serif from Fontshare / ITF */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=bonny@400,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased font-[family-name:var(--font-outfit)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
