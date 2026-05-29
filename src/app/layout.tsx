import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import ScrollProvider from "@/components/animations/ScrollProvider";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "The Fork | Luxury Catering & Ambiance Creation",
  description: "Experience 5-star culinary craftsmanship and luxury ambiance creation. Catering weddings, corporate events, and cocktail dinners across Delhi, Thailand, Ahmedabad, and Dehradun.",
  keywords: [
    "The Fork Luxury Catering",
    "Luxury Catering Services Delhi",
    "Five Star Food Quality Delhi",
    "Premium Wedding Catering",
    "Corporate Event Catering",
    "Anil Yadav Sonu Gahlot Catering"
  ],
  authors: [{ name: "Anil Yadav & Sonu Gahlot" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900 pb-24 md:pb-0 selection:bg-gold-500 selection:text-white">
        <ScrollProvider>
          {children}
        </ScrollProvider>
      </body>
    </html>
  );
}
