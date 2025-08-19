"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useSafeTranslation } from "@/hooks/useSafeTranslation";
import logoImage from "@/assets/images/logo_chain.png";

const HeroSection = () => {
  const { t } = useSafeTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 md:mb-8 flex justify-center"
          >
            <div className="relative pt-3">
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="w-20 h-20 md:w-32 md:h-32 rounded-full flex items-center justify-center"
              >
                <Image
                  src={logoImage}
                  alt="Ariz Group Logo"
                  width={60}
                  height={60}
                  className="w-12 h-12 md:w-20 md:h-20 object-contain"
                />
              </motion.div>
              
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-full bg-primary/20 blur-xl"
              />
            </div>
          </motion.div>
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight px-2"
          >
            <span className="bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
              {t('hero.title', 'Your Supply Chain Solutions').split(' ').slice(0, 2).join(' ')}
            </span>
            <br />
            <span className="text-foreground">
              {t('hero.title', 'Your Supply Chain Solutions').split(' ').slice(2).join(' ')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2"
          >
            {t('hero.subtitle', 'Ariz Group is your trusted partner in supply chain solutions. We provide comprehensive services, including sourcing, procurement, expediting, and inspection, ensuring high-quality products are delivered on time and within budget. Our expertise extends to shipment consolidation, export packing, and handling export formalities, streamlining your logistics. With a customer-focused approach, we enhance your operational efficiency and support your business growth. Partner with us today!')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4"
          >
            <Link href="/products" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="group bg-gradient-primary hover:shadow-glow-lg transition-all duration-300 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 w-full sm:w-auto"
              >
                {t('hero.explore', 'Explore')}
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 hover:border-primary hover:bg-primary/10 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 transition-all duration-300 w-full sm:w-auto"
              >
                {t('nav.contact', 'Contact')}
              </Button>
            </Link>
          </motion.div>

          {/* Stats or features section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 px-2 mb-6"
          >
            {[
              { number: "500+", label: "Global Clients" },
              { number: "50+", label: "Countries Served" },
              { number: "99.9%", label: "Uptime Guarantee" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                className="text-center p-4 md:p-6 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-1 md:mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;