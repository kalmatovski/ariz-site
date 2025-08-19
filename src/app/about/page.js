"use client";

import { motion } from "framer-motion";
import { Users, Target, Award, TrendingUp } from "lucide-react";
import TechCard from "@/components/ui/tech-card";
import Layout from "@/components/layout/Layout";
import { useSafeTranslation } from "@/hooks/useSafeTranslation";

export default function About() {
  const { t } = useSafeTranslation();

  const features = [
    {
      icon: Target,
      title: t('about.mission', 'Our Mission'),
      description: "To revolutionize supply chain management through innovative technology solutions that drive efficiency, sustainability, and growth for businesses worldwide."
    },
    {
      icon: Award,
      title: t('about.values', 'Our Values'),
      description: "We believe in integrity, innovation, and excellence. Our commitment to quality and customer satisfaction drives everything we do."
    },
    {
      icon: TrendingUp,
      title: t('about.experience', 'Our Experience'),
      description: "With over two decades of industry experience, we've helped thousands of companies optimize their supply chain operations."
    },
    {
      icon: Users,
      title: "Global Team",
      description: "Our diverse team of experts spans across multiple continents, bringing local knowledge and global perspective to every project."
    }
  ];

  const stats = [
    { number: "20+", label: "Years Experience" },
    { number: "2000+", label: "Projects Completed" },
    { number: "50+", label: "Countries Served" },
    { number: "24/7", label: "Support Available" }
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
            <span className="bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
              {t('about.title', 'About Us').split(' ')[0]}
            </span>{" "}
            <span className="text-foreground">{t('about.title', 'About Us').split(' ')[1]}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are pioneers in supply chain innovation, dedicated to transforming how businesses 
            connect, collaborate, and compete in the global marketplace.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
            >
              <TechCard className="h-full" glow hover>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </TechCard>
            </motion.div>
          ))}
        </div>

        {/* Company Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <TechCard className="max-w-4xl mx-auto" gradient>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              {t('about.story.title', 'Our Story')}
            </h2>
            <div className="prose prose-lg prose-invert mx-auto">
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t('about.story.paragraph1', 'Founded in 2003, SCS Tech began as a vision to bridge the gap between traditional supply chain management and cutting-edge technology. What started as a small team of engineers and logistics experts has grown into a global powerhouse, serving clients across six continents.')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.story.paragraph2', 'Today, we continue to push the boundaries of what\'s possible in supply chain innovation, leveraging AI, IoT, and blockchain technologies to create solutions that not only meet today\'s challenges but anticipate tomorrow\'s opportunities.')}
              </p>
            </div>
          </TechCard>
        </motion.div>
      </div>
    </Layout>
  );
}