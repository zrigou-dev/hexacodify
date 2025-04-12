import Image from "next/image";
import HeroSection from "./components/heroSection/heroSection";
import ServiceSection from "./components/servicesSection/servicesSection";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import FAQSection from "./components/faq/Faq";
import BlogCardsSection from "./components/blogCards/blogCards";
import AboutSection from "./components/about/aboutUs";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Web & Mobile Development Experts | Your Company Name</title>
        <meta
          name="description"
          content="We are a team of expert web and mobile app developers, delivering high-quality solutions for your digital needs."
        />
        <meta
          name="keywords"
          content="web development, mobile app development, software development, mobile applications, responsive websites, app developers"
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Web & Mobile Development Experts | Your Company Name"
        />
        <meta
          property="og:description"
          content="Our team specializes in creating web and mobile applications with a focus on user experience and innovative solutions."
        />
      </Head>
      <div className="">
        <HeroSection />
        <AboutSection />
        <WhyChooseUs />
        <ServiceSection />
        <BlogCardsSection />
        <FAQSection />
      </div>
    </>
  );
}
