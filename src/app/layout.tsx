import type { Metadata } from "next";
import { Outfit, Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import Toast from "@/components/Toast";
import { CartProvider } from "@/context/CartContext";

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
    default: "Yamasen Japanese Restaurant | Farm to Table Kampala",
    template: "%s | Yamasen Japanese Restaurant",
  },
  description:
    "Farm to table Japanese restaurant in Kampala. Organic vegetables from our own farm, seafood from Dar es Salaam, Kyoto trained kitchen. Tank Hill Park, Muyenga.",
  keywords: [
    "Yamasen",
    "Japanese restaurant Kampala",
    "farm to table Uganda",
    "sushi Kampala",
    "Tank Hill",
    "Muyenga dining",
    "omakase Kampala",
  ],
  openGraph: {
    title: "Yamasen Japanese Restaurant",
    description: "Farm to table Japanese dining in Kampala.",
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
    <html lang="en" className={`${outfit.variable} ${quicksand.variable}`}>
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
