import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { META_DATA_DEFAULT } from "@/constants/seo";
import "./globals.css";
import Navigation from "@/components/common/navigation";
import Footer from "@/components/common/footer";

const raleway = Raleway({
  subsets: ["latin"],
  variable: '--font-sans',
});

export const metadata: Metadata = META_DATA_DEFAULT;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
