import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Radix Infra Projects | India's Leading Infrastructure Company",
  description: "Radix Infra is a leading turnkey infrastructure firm in India, specializing in Earthworks, RCC Projects, Road Construction, and Hard Landscaping since 1998.",
  openGraph: {
    title: "Radix Infra Projects | India's Leading Infrastructure Company",
    description: "Radix Infra is a leading turnkey infrastructure firm in India, specializing in Earthworks, RCC Projects, Road Construction, and Hard Landscaping since 1998.",
    type: "website",
    locale: "en_IN",
    url: "https://radixinfra.com",
    siteName: "Radix Infra",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" id="top">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Open+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={`${openSans.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
