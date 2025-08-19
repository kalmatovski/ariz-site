"use client";

import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import TechCard from "@/components/ui/tech-card";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* 404 Animation */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="text-8xl md:text-9xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              404
            </div>
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-32 h-1 bg-gradient-primary mx-auto rounded-full"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Oops! Page Not Found
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The page you&rsquo;re looking for seems to have wandered off into the digital void. 
              Don&rsquo;t worry, even the best supply chains have occasional misrouted packages!
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Link href="/">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow-lg">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary/50 hover:border-primary hover:bg-primary/10"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <TechCard gradient>
              <h2 className="text-xl font-semibold mb-6 text-foreground">
                Popular Pages
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Products", href: "/products" },
                  { name: "About Us", href: "/about" },
                  { name: "Partners", href: "/partners" },
                  { name: "Contact", href: "/contact" }
                ].map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
                  >
                    <Link href={link.href}>
                      <Button 
                        variant="ghost" 
                        className="w-full hover:bg-primary/20 hover:text-primary transition-all duration-300"
                      >
                        {link.name}
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </TechCard>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-neon-blue/10 blur-xl"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-neon-cyan/10 blur-xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}