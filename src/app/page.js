"use client";

import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
    </Layout>
  );
}