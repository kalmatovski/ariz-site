"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import TechCard from "@/components/ui/tech-card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useSafeTranslation } from "@/hooks/useSafeTranslation";

export default function News() {
  const { t } = useSafeTranslation();

  const newsItems = [
    {
      id: "1",
      title: "Revolutionary Chemical Processing Technology Launched",
      excerpt: "Our latest innovation in chemical processing delivers 40% improved efficiency and reduced environmental impact.",
      image: "/placeholder.svg",
      date: "2024-01-15",
      category: "Technology",
      readTime: "5 min",
      featured: true
    },
    {
      id: "2", 
      title: "Global Partnership with Leading Mining Corporation",
      excerpt: "Expanding our reach across three new continents with strategic partnership for mining equipment supply.",
      image: "/placeholder.svg",
      date: "2024-01-10",
      category: "Partnership",
      readTime: "3 min",
      featured: false
    },
    {
      id: "3",
      title: "Sustainable Hydro-Power Solutions Win Industry Award",
      excerpt: "Recognition for our eco-friendly approach to hydroelectric power generation systems.",
      image: "/placeholder.svg",
      date: "2024-01-05",
      category: "Awards",
      readTime: "4 min",
      featured: false
    },
    {
      id: "4",
      title: "Advanced Safety Protocols for Mining Operations",
      excerpt: "Implementing next-generation safety measures across all mining supply operations.",
      image: "/placeholder.svg",
      date: "2023-12-28",
      category: "Safety",
      readTime: "6 min",
      featured: false
    },
    {
      id: "5",
      title: "Q4 2023 Performance Report Shows Record Growth",
      excerpt: "Exceptional performance across all sectors with 150% growth in international markets.",
      image: "/placeholder.svg",
      date: "2023-12-20",
      category: "Business",
      readTime: "7 min",
      featured: false
    },
    {
      id: "6",
      title: "Innovation in Machinery Spare Parts Manufacturing",
      excerpt: "New 3D printing technology reduces production time by 60% for custom spare parts.",
      image: "/placeholder.svg",
      date: "2023-12-15",
      category: "Innovation",
      readTime: "5 min",
      featured: false
    }
  ];

  const categories = ["All", "Technology", "Partnership", "Awards", "Safety", "Business", "Innovation"];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getCategoryColor = (category) => {
    const colors = {
      Technology: "bg-neon-blue/20 text-neon-blue border-neon-blue/30",
      Partnership: "bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30",
      Awards: "bg-neon-red/20 text-neon-red border-neon-red/30",
      Safety: "bg-neon-turquoise/20 text-neon-turquoise border-neon-turquoise/30",
      Business: "bg-primary/20 text-primary border-primary/30",
      Innovation: "bg-accent/20 text-accent border-accent/30"
    };
    return colors[category] || "bg-muted/20 text-muted-foreground border-muted/30";
  };

  const featuredNews = newsItems.filter(item => item.featured);
  const regularNews = newsItems.filter(item => !item.featured);

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
              {t('news.title').split(' ')[0]}
            </span>{" "}
            <span className="text-foreground">{t('news.title').split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest developments, innovations, and achievements 
            in our journey to transform supply chain solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
              className={`px-4 py-2 rounded-full border transition-all duration-300 hover:scale-105 ${
                index === 0 
                  ? "bg-primary text-primary-foreground border-primary" 
                  : "bg-background border-border hover:border-primary/50 text-muted-foreground hover:text-primary"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured News */}
        {featuredNews.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-8 flex items-center">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Featured</span>
              <div className="ml-3 h-px bg-gradient-primary flex-1" />
            </h2>
            
            {featuredNews.map((article, index) => (
              <TechCard key={article.id} className="mb-8" glow gradient>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(article.category)}`}>
                        <Tag className="w-3 h-3 mr-1" />
                        {article.category}
                      </span>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(article.date)}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 text-foreground hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <Link href={`/news/${article.id}`}>
                      <Button className="group bg-gradient-primary hover:shadow-glow-lg">
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="order-1 lg:order-2">
                    <div className="relative overflow-hidden rounded-lg aspect-video bg-muted">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <div className="text-6xl font-bold text-primary/50">
                          {article.category.charAt(0)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TechCard>
            ))}
          </motion.div>
        )}

        {/* Regular News Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <span className="text-foreground">Latest Updates</span>
            <div className="ml-3 h-px bg-border flex-1" />
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
              >
                <TechCard className="h-full group" hover>
                  <div className="flex flex-col h-full">
                    {/* Image placeholder */}
                    <div className="relative overflow-hidden rounded-lg aspect-video bg-muted mb-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
                        <div className="text-4xl font-bold text-primary/30">
                          {article.category.charAt(0)}
                        </div>
                      </div>
                    </div>
                    
                    {/* Category and meta */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(article.category)}`}>
                        <Tag className="w-3 h-3 mr-1" />
                        {article.category}
                      </span>
                      <div className="flex items-center text-muted-foreground text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center text-muted-foreground text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        {formatDate(article.date)}
                      </div>
                      
                      <Link href={`/news/${article.id}`}>
                        <Button variant="ghost" size="sm" className="group/btn p-2">
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </TechCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Load More Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-16"
        >
          <Button variant="outline" size="lg" className="border-primary/50 hover:border-primary hover:bg-primary/10">
            Load More Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </Layout>
  );
}