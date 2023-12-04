import React from "react";
import Hero from "../components/Hero";
import MissionSection from "../components/MissionSection";
import ProductsSection from "../components/ProductsSection";
import CommunitySection from "../components/CommunitySection";
import Head from "next/head";
import ReactGA from "react-ga";

export default function Home() {
  ReactGA.pageview("home");

  const productsComponent = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <Head>
        <title>Polywrap - Autonomous Intelligence</title>
      </Head>
      <main>
        <Hero scrollToProducts={() => {
          if (productsComponent.current) {
            productsComponent.current.scrollIntoView({ behavior: 'smooth' });
          }
        }} />
        <div ref={productsComponent}>
          <ProductsSection />
        </div>
        <MissionSection />
        <CommunitySection />
      </main>
    </>
  );
}
