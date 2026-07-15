import dynamic from "next/dynamic";
import HeroCarousel from "@/components/sections/HeroCarousel";
import Stats from "@/components/sections/Stats";
import ServiceCategories from "@/components/sections/ServiceCategories";
import LazyScroll from "@/components/shared/LazyScroll";

const FeaturedServices = dynamic(() => import("@/components/sections/FeaturedServices"));
const WhyChooseUs = dynamic(() => import("@/components/sections/WhyChooseUs"));
const InstallationProcess = dynamic(() => import("@/components/sections/InstallationProcess"));
const Materials = dynamic(() => import("@/components/sections/Materials"));
const BeforeAfter = dynamic(() => import("@/components/sections/BeforeAfter"));
const Team = dynamic(() => import("@/components/sections/Team"));
const ServiceAreas = dynamic(() => import("@/components/sections/ServiceAreas"));
const CustomerReviews = dynamic(() => import("@/components/sections/CustomerReviews"));
const FAQAccordion = dynamic(() => import("@/components/sections/FAQAccordion"));
const ContactForm = dynamic(() => import("@/components/forms/ContactForm"));

export default function Home() {
  // SearchAction Schema for sitelink search box
  const searchActionSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.rjinvisiblegrills.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.rjinvisiblegrills.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      {/* SearchAction Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(searchActionSchema) }}
      />

      {/* Homepage Sections in Brand-defined Order */}
      <HeroCarousel />
      <Stats />
      <ServiceCategories />
      <FeaturedServices />
      
      <LazyScroll minHeight="300px">
        <WhyChooseUs />
      </LazyScroll>
      
      <LazyScroll minHeight="400px">
        <InstallationProcess />
      </LazyScroll>
      
      <LazyScroll minHeight="400px">
        <Materials />
      </LazyScroll>
      
      <LazyScroll minHeight="500px">
        <BeforeAfter />
      </LazyScroll>
      
      <LazyScroll minHeight="400px">
        <Team />
      </LazyScroll>
      
      <LazyScroll minHeight="300px">
        <ServiceAreas />
      </LazyScroll>
      
      <LazyScroll minHeight="400px">
        <CustomerReviews />
      </LazyScroll>
      
      <FAQAccordion />
      
      <LazyScroll minHeight="500px">
        <ContactForm />
      </LazyScroll>
    </>
  );
}
