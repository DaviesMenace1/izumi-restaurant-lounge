import type { Metadata } from "next";
import { Staatliches, Josefin_Sans, Outfit, Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import Toast from "@/components/Toast";
import { CartProvider } from "@/context/CartContext";

const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bauhaus",
  display: "swap",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-josefin",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-quicksand",
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
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${staatliches.variable} ${josefin.variable} ${outfit.variable} ${quicksand.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${outfit.className} min-h-screen flex flex-col antialiased`}>
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <Toast />
        </CartProvider>
      </body>
    </html>
  );
}
