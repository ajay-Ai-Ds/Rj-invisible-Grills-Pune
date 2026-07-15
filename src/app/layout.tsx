import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";
import MobileBottomBar from "@/components/shared/MobileBottomBar";
import { imageAssets } from "@/utils/images";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RJ Invisible Grills | Premium Invisible Grills & Sports Nets Pune",
  description:
    "RJ Invisible Grills offers professional balcony, window, and staircase invisible grills, sports nets, and cricket practice nets in Pune, Maharashtra. Fast installation with premium materials.",
  keywords: [
    "Invisible Grills Pune",
    "Balcony Invisible Grills Pune",
    "Window Invisible Grills Pune",
    "Staircase Invisible Grills Pune",
    "Sports Nets Pune",
    "Cricket Practice Nets Pune",
    "RJ Invisible Grills Pune",
  ],
  metadataBase: new URL("https://www.rjinvisiblegrills.com"),
  verification: {
    google: "fYQkLBeMnZJOHutLePpTNA_y7Z98S0mCOZuzBiJdrpE",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RJ Invisible Grills | Premium Invisible Grills & Sports Nets",
    description:
      "Expert invisible steel wire grills and modern sports netting installation in Pune. Rest assured with safety systems built for high durability and style.",
    url: "https://www.rjinvisiblegrills.com",
    siteName: "RJ Invisible Grills",
    images: [
      {
        url: imageAssets.ogImage.url,
        width: 1200,
        height: 630,
        alt: imageAssets.ogImage.alt,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RJ Invisible Grills | Premium Invisible Grills & Sports Nets",
    description:
      "Premium invisible steel wire grills and sports nets in Pune, Maharashtra.",
    images: [imageAssets.ogImage.url],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.rjinvisiblegrills.com/#localbusiness",
    "name": "RJ Invisible Grills",
    "url": "https://www.rjinvisiblegrills.com",
    "telephone": "+91 80191 13644",
    "email": "info.rjinvisiblegrills@gmail.com",
    "image": imageAssets.ogImage.url,
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office: Kothrud",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411038",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.5204,
      "longitude": 73.8567,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "08:00",
      "closes": "20:00",
    },
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RJ Invisible Grills",
    "url": "https://www.rjinvisiblegrills.com",
    "logo": imageAssets.logoIcon.url,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-80191-13644",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Marathi"],
    },
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Schema markup script injections */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* Google Analytics 4 (GA4) - Lazy-loaded strategy */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZCYPR2V24D"
          strategy="lazyOnload"
        />
        <Script id="ga-init" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZCYPR2V24D');
          `}
        </Script>

        {/* Google Tag Manager (GTM) placeholder */}
        <Script id="gtm" strategy="lazyOnload">
          {`
            const gtmId = 'GTM-TEMPLATE_ID';
            if (gtmId && !gtmId.includes('TEMPLATE')) {
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer',gtmId);
            }
          `}
        </Script>

        {/* Microsoft Clarity placeholder */}
        <Script id="microsoft-clarity" strategy="lazyOnload">
          {`
            const clarityId = 'CLARITY_PROJECT_ID';
            if (clarityId && !clarityId.includes('PROJECT')) {
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", clarityId);
            }
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-accent-orange selection:text-white">
        <Navbar />
        <main className="flex-grow pt-[72px] xl:pt-[84px] pb-16 xl:pb-0">{children}</main>
        <Footer />
        <FloatingCTA />
        <MobileBottomBar />
      </body>
    </html>
  );
}
