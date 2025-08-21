'use client'

import { motion } from 'framer-motion'
import {
  Building2,
  Globe,
  Users,
  TrendingUp,
  ArrowRight,
  Star,
} from 'lucide-react'
import TechCard from '@/components/ui/tech-card'
import { Button } from '@/components/ui/button'
import Layout from '@/components/layout/Layout'
import Link from 'next/link'
import { useSafeTranslation } from '@/hooks/useSafeTranslation'

export default function Partners() {
  const { t } = useSafeTranslation()

  const partnerCategories = [
    {
      title: 'Technology Partners',
      description: 'Leading technology companies that enhance our solutions',
      icon: Building2,
      partners: [
        {
          name: 'TechCorp Global',
          industry: 'AI & Machine Learning',
          region: 'North America',
        },
        {
          name: 'DataFlow Systems',
          industry: 'IoT Solutions',
          region: 'Europe',
        },
        {
          name: 'CloudTech Innovations',
          industry: 'Cloud Infrastructure',
          region: 'Asia Pacific',
        },
        {
          name: 'SecureNet Solutions',
          industry: 'Cybersecurity',
          region: 'Global',
        },
      ],
    },
    {
      title: 'Distribution Partners',
      description:
        'Worldwide network ensuring global reach and local expertise',
      icon: Globe,
      partners: [
        {
          name: 'Global Logistics Ltd',
          industry: 'Supply Chain',
          region: 'Worldwide',
        },
        {
          name: 'EuroDistrib Network',
          industry: 'Distribution',
          region: 'Europe',
        },
        {
          name: 'Asia Trade Solutions',
          industry: 'Trading',
          region: 'Asia Pacific',
        },
        {
          name: 'Americas Supply Co',
          industry: 'Logistics',
          region: 'Americas',
        },
      ],
    },
    {
      title: 'Strategic Partners',
      description: 'Long-term collaborations driving industry innovation',
      icon: Users,
      partners: [
        {
          name: 'Industrial Solutions Group',
          industry: 'Manufacturing',
          region: 'Global',
        },
        {
          name: 'Mining Excellence Corp',
          industry: 'Mining',
          region: 'Australia',
        },
        {
          name: 'Energy Innovations Ltd',
          industry: 'Energy',
          region: 'Middle East',
        },
        {
          name: 'Sustainable Tech Alliance',
          industry: 'Green Technology',
          region: 'Europe',
        },
      ],
    },
  ]

  const partnershipBenefits = [
    {
      icon: TrendingUp,
      title: 'Growth Opportunities',
      description:
        'Access to new markets and revenue streams through our global network',
    },
    {
      icon: Building2,
      title: 'Technical Excellence',
      description:
        'Leverage our cutting-edge technology and industry expertise',
    },
    {
      icon: Users,
      title: 'Collaborative Support',
      description: 'Dedicated partnership team ensuring mutual success',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Expand your presence across 50+ countries worldwide',
    },
  ]

  const testimonials = [
    {
      quote:
        'SCS Tech has been an exceptional partner, helping us expand our reach into new markets while maintaining the highest quality standards.',
      author: 'Sarah Johnson',
      position: 'CEO, TechCorp Global',
      rating: 5,
    },
    {
      quote:
        'The collaboration with SCS Tech has transformed our supply chain efficiency by 40%. Their innovative approach is unmatched.',
      author: 'Michael Chen',
      position: 'Operations Director, Global Logistics Ltd',
      rating: 5,
    },
    {
      quote:
        'Working with SCS Tech opened doors to opportunities we never imagined. Their global network is truly impressive.',
      author: 'Elena Rodriguez',
      position: 'Partnership Manager, EuroDistrib Network',
      rating: 5,
    },
  ]

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
              Our
            </span>{' '}
            <span className="text-foreground">
              {t('partners.title').split(' ')[1]}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building strategic alliances with industry leaders to deliver
            comprehensive solutions and drive innovation across global markets.
          </p>
        </motion.div>

        {/* Partnership Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {[
            { number: '200+', label: 'Global Partners' },
            { number: '50+', label: 'Countries' },
            { number: '15+', label: 'Years Experience' },
            { number: '99%', label: 'Partner Satisfaction' },
          ].map((stat, index) => (
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
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partner Categories */}
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent"
          >
            Partner Categories
          </motion.h2>

          <div className="space-y-12">
            {partnerCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + categoryIndex * 0.2, duration: 0.6 }}
              >
                <TechCard gradient glow>
                  <div className="mb-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                        <category.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">
                          {category.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.partners.map((partner, partnerIndex) => (
                      <motion.div
                        key={partner.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 1 + categoryIndex * 0.2 + partnerIndex * 0.1,
                          duration: 0.4,
                        }}
                        className="p-4 rounded-lg bg-background/50 border border-border hover:border-primary/50 transition-all duration-300 group"
                      >
                        <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {partner.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-1">
                          {partner.industry}
                        </p>
                        <p className="text-xs text-primary">{partner.region}</p>
                      </motion.div>
                    ))}
                  </div>
                </TechCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Why Partner With Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
              >
                <TechCard className="h-full text-center" hover>
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </TechCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            What Our Partners Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2 + index * 0.1, duration: 0.6 }}
              >
                <TechCard className="h-full" gradient>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-primary">
                      {testimonial.position}
                    </div>
                  </div>
                </TechCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="text-center"
        >
          <TechCard className="max-w-4xl mx-auto" gradient>
            <h2 className="text-3xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Ready to Partner With Us?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Join our global network of partners and unlock new opportunities
              for growth, innovation, and success in the evolving supply chain
              landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-primary hover:shadow-glow-lg"
                >
                  Become a Partner
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/50 hover:border-primary"
              >
                Download Partnership Guide
              </Button>
            </div>
          </TechCard>
        </motion.div>
      </div>
    </Layout>
  )
}
