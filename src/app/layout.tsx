

import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import AOSProvider from "@/components/AOSProvider";
import Script from "next/script";
import { Suspense } from "react"; // Import Suspense

export const metadata: Metadata = {
  title: "My Next.js Shop",
  description: "Next.js Final Assessment Project",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" sizes="32x32" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body style={{ fontFamily: "'Roboto', sans-serif" }}>
        {/* Wrap Navbar in Suspense boundary */}
        <Suspense fallback={<div>Loading navigation...</div>}>
          <Navbar />
        </Suspense>
        
        <AOSProvider>
          <main>{children}</main>
        </AOSProvider>
        
        <Footer />
        
        {/* Bootstrap JS + Popper after hydration */}
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}