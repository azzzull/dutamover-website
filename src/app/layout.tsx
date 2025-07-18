import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { organizationSchema, localBusinessSchema } from "@/lib/schema";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"] 
});

export const metadata: Metadata = {
  title: {
    default: "Dutamover - Jasa Pindahan Terpercaya",
    template: "%s | Dutamover"
  },
  description: "Jasa pindahan rumah & kantor profesional. Berpengalaman 10+ tahun, aman, cepat, harga kompetitif. Call 0815-1032-6123",
  keywords: [
    "jasa pindahan jakarta",
    "jasa pindahan rumah",
    "jasa pindahan kantor", 
    "jasa packing",
    "dutamover",
    "dutamovers",
    "pindahan profesional",
    "moving service jakarta",
    "jasa pindahan BSD",
    "jasa angkut barang"
  ],
  authors: [{ name: "Dutamover" }],
  creator: "Dutamover",
  publisher: "Dutamover",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.dutamover.com"),
  openGraph: {
    title: "Dutamover - Jasa Pindahan Terpercaya",
    description: "Jasa pindahan rumah & kantor profesional. Berpengalaman 10+ tahun, aman, cepat, harga kompetitif.",
    url: "https://www.dutamover.com",
    siteName: "Dutamover",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dutamover - Jasa Pindahan Profesional",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dutamover - Jasa Pindahan Terpercaya",
    description: "Jasa pindahan rumah & kantor profesional. Berpengalaman 10+ tahun, aman, cepat, harga kompetitif.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "yeIfoX-KfAB6mw8YwATWF25KZEPVcZVswbb5xV5Zs74",
    yandex: "yandex-verification-code",
    other: {
      "msvalidate.01": "bing-verification-code"
    }
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="canonical" href="https://www.dutamover.com" />
        <meta name="geo.region" content="ID-JK" />
        <meta name="geo.placename" content="Jakarta" />
        <meta name="geo.position" content="-6.2088;106.8456" />
        <meta name="ICBM" content="-6.2088, 106.8456" />
        
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="yeIfoX-KfAB6mw8YwATWF25KZEPVcZVswbb5xV5Zs74" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#1D8F4A" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
        {/* Analytics & Tracking */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=158759676"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_TRACKING_ID');
            `,
          }}
        />
        
        {/* Business Info */}
        <meta name="business:contact_data:street_address" content="Plaza Cordoba Blok I no 6 dan 7, Jl. Batam Nusaloka BSD" />
        <meta name="business:contact_data:locality" content="Tangerang Selatan" />
        <meta name="business:contact_data:region" content="Banten" />
        <meta name="business:contact_data:postal_code" content="15345" />
        <meta name="business:contact_data:country_name" content="Indonesia" />
        <meta name="business:contact_data:phone_number" content="+62-815-1032-6123" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
