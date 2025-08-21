'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useSafeTranslation } from '@/hooks/useSafeTranslation'
import { Github, Twitter, Linkedin, Mail } from 'lucide-react'
import logoImage from '@/assets/images/logo_chain.png'

const Footer = () => {
  const { t } = useSafeTranslation()

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: '#', label: 'Email' },
  ]

  const footerLinks = [
    {
      title: t('nav.about'),
      links: [
        { name: t('about.mission'), href: '/about#mission' },
        { name: t('about.values'), href: '/about#values' },
        { name: t('about.experience'), href: '/about#experience' },
      ],
    },
    {
      title: t('nav.products'),
      links: [
        {
          name: t('products.chemicals.title') || 'Chemicals',
          href: '/products#chemicals',
        },
        {
          name: t('products.machinery.title') || 'Mining Machinery',
          href: '/products#machinery',
        },
        {
          name: t('products.supplies.title') || 'Mining Supplies',
          href: '/products#supplies',
        },
        {
          name: t('products.other.title') || 'Other Products',
          href: '/products#other',
        },
        {
          name: t('products.hydropower.title') || 'Hydro-Power',
          href: '/products#hydropower',
        },
      ],
    },
    {
      title: t('nav.contact'),
      links: [
        { name: t('contact.address'), href: '/contact#address' },
        { name: t('contact.phone'), href: '/contact#phone' },
        { name: t('contact.email'), href: '/contact#email' },
      ],
    },
  ]

  return (
    <footer className="relative bg-background-secondary border-t border-border">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-neon-blue/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-neon-cyan/5 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Image
                  src={logoImage}
                  alt="Ariz Group Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
                <div className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-primary bg-clip-text text-transparent">
                  Ariz Group
                </div>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Comprehensive solutions across multiple industries with
                cutting-edge technology and unmatched quality standards.
              </p>
            </motion.div>

            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2 rounded-lg bg-card hover:bg-primary/20 border border-border hover:border-primary/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h3 className="font-semibold text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 SCS Tech. {t('footer.rights')}
            </p>
            <p className="text-muted-foreground text-sm">
              {t('footer.follow')}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
