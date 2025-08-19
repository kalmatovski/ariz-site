"use client";

import { motion } from "framer-motion";
import { Beaker, Cog, Pickaxe, Package, Zap, ArrowRight } from "lucide-react";
import TechCard from "@/components/ui/tech-card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useSafeTranslation } from "@/hooks/useSafeTranslation";

export default function Products() {
  const { t, ready } = useSafeTranslation();

  // Wait for translations to be ready
  if (!ready) {
    return (
      <Layout>
        <div className="container mx-auto px-6 py-20 text-center">
          <div className="text-primary">Loading translations...</div>
        </div>
      </Layout>
    );
  }

  const categories = [
    {
      icon: Beaker,
      title: t('products.chemicals.title') || 'Chemicals',
      products: [
        t('products.chemicals.items.0') || "Froth Flotation Reagents",
        t('products.chemicals.items.1') || "Flocculants", 
        t('products.chemicals.items.2') || "Xanthates",
        t('products.chemicals.items.3') || "MIBC & Frothers",
        t('products.chemicals.items.4') || "SMBS & Caustic Soda",
        t('products.chemicals.items.5') || "Copper Sulphate"
      ],
      slug: "chemicals"
    },
    {
      icon: Cog,
      title: t('products.machinery.title') || 'Mining Machinery Spare Parts',
      products: [
        t('products.machinery.items.0') || "Mining tyres",
        t('products.machinery.items.1') || "Motor Spare Parts"
      ],
      slug: "mining-machinery"
    },
    {
      icon: Pickaxe,
      title: t('products.supplies.title') || 'Mining Supplies',
      products: [
        t('products.supplies.items.0') || "Steel Grinding Balls",
        t('products.supplies.items.1') || "Ceramic Beads",
        t('products.supplies.items.2') || "Grinding Cylpebs",
        t('products.supplies.items.3') || "Grinding Rods"
      ],
      slug: "mining-supplies"
    },
    {
      icon: Package,
      title: t('products.other.title') || 'Other Mining Products',
      products: [
        t('products.other.items.0') || "Hardware Products",
        t('products.other.items.1') || "Software Products",
        t('products.other.items.2') || "Industrial Tools",
        t('products.other.items.3') || "Electronics"
      ],
      slug: "other-mining"
    },
    {
      icon: Zap,
      title: t('products.hydropower.title') || 'Hydro-Power Plants',
      products: [
        t('products.hydropower.items.0') || "pipes",
        t('products.hydropower.items.1') || "flanges",
        t('products.hydropower.items.2') || "valves",
        t('products.hydropower.items.3') || "reducer tee",
        t('products.hydropower.items.4') || "LR elbow"
      ],
      slug: "hydro-power"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-neon-red to-red-500 bg-clip-text text-transparent">
              {t('products.title')}
            </span>
          </h1>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <TechCard className="h-full" glow hover>
                <div className="flex flex-col h-full">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-6 text-foreground">
                    {category.title}
                  </h3>

                  {/* Product list */}
                  <div className="space-y-3">
                    {category.products.length === 0 && (
                      <div className="text-red-500 text-sm">No products found for this category</div>
                    )}
                    {category.products.map((product, productIndex) => (
                      <motion.div
                        key={product}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.1) + (productIndex * 0.05), duration: 0.3 }}
                        className="flex items-start text-sm text-muted-foreground"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary mr-3 mt-1.5 flex-shrink-0" />
                        <span className="leading-relaxed">{product}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TechCard>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <TechCard className="max-w-4xl mx-auto" gradient>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              {t('products.customSolution')}
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              {t('products.customDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow-lg">
                  {t('products.getQuote')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="border-primary/50 hover:border-primary">
                  {t('products.learnAboutUs')}
                </Button>
              </Link>
            </div>
          </TechCard>
        </motion.div>
      </div>
    </Layout>
  );
}