"use client";

import { motion } from "framer-motion";
import { Shield, Truck, Warehouse, Globe, Search } from "lucide-react";
import TranslatedText from "@/components/TranslatedText";

const ServicesSection = () => {
  const services = [
    {
      key: "quality",
      icon: Shield,
      color: "from-neon-red to-red-500"
    },
    {
      key: "logistics",
      icon: Truck,
      color: "from-red-500 to-neon-red"
    },
    {
      key: "warehousing",
      icon: Warehouse,
      color: "from-neon-red to-red-600"
    },
    {
      key: "export",
      icon: Globe,
      color: "from-red-600 to-neon-red"
    },
    {
      key: "alternatives",
      icon: Search,
      color: "from-neon-red to-red-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-background-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 left-10 w-32 h-32 border border-neon-red/20 rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 right-10 w-24 h-24 border border-red-500/20 rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-neon-red to-red-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.key}
                variants={cardVariants}
                className="group"
              >
                <div className="relative h-full bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 p-6 hover:bg-card/70 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"
                       style={{
                         backgroundImage: `linear-gradient(135deg, hsl(var(--neon-blue)), hsl(var(--neon-cyan)))`
                       }}
                  />
                  
                  {/* Icon */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} p-3 mb-4 shadow-lg shadow-primary/20`}
                    >
                      <Icon className="w-full h-full text-background" />
                    </motion.div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-foreground mb-3 font-mts">
                      <TranslatedText 
                        tKey={`services.${service.key}.title`} 
                        fallback={service.key.charAt(0).toUpperCase() + service.key.slice(1)} 
                      />
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      <TranslatedText 
                        tKey={`services.${service.key}.description`} 
                        fallback="Service description" 
                      />
                    </p>
                  </div>
                  
                  {/* Hover border glow */}
                  <div className="absolute inset-0 rounded-xl border border-transparent bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
