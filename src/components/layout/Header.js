'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X, Globe } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useSafeTranslation } from '@/hooks/useSafeTranslation'
import TranslatedText from '@/components/TranslatedText'
import LanguageDisplay from '@/components/LanguageDisplay'
import logoChain from '@/assets/images/logo_chain.png'
import ThemeSwitcher from '../ThemeSwitcher'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { i18n } = useSafeTranslation()

  const navigation = [
    { name: 'nav.home', href: '/', fallback: 'Home' },
    { name: 'nav.about', href: '/about', fallback: 'About' },
    { name: 'nav.products', href: '/products', fallback: 'Products' },
    { name: 'nav.news', href: '/news', fallback: 'News' },
    { name: 'nav.partners', href: '/partners', fallback: 'Partners' },
    { name: 'nav.contact', href: '/contact', fallback: 'Contact' },
  ]

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg"
    >
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between min-h-[48px]">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              {/* Desktop Logo */}
              <div className="hidden md:flex flex-col items-center">
                <div className="flex items-center gap-1 text-2xl font-bold text-red-600">
                  <span>ARIZ GR</span>{' '}
                  <Image
                    src={logoChain}
                    alt="Ariz Group"
                    className="w-10 h-10 rotate-45"
                    priority
                  />
                  <span>P</span>
                </div>
                <div className="flex items-center">
                  <div className="h-0.5 w-12 bg-red-600 gap-2"></div>
                  <span className="text-sm text-gray-500 whitespace-nowrap">
                    your supply chain solutions
                  </span>
                  <div className="h-0.5 w-12 bg-red-600"></div>
                </div>
              </div>

              {/* Mobile Logo */}
              <div className="md:hidden flex items-center">
                <div className="flex items-center gap-1 text-lg font-bold text-red-600">
                  <span>ARIZ</span>
                  <Image
                    src={logoChain}
                    alt="Ariz Group"
                    className="w-6 h-6 rotate-45"
                    priority
                  />
                  <span>GP</span>
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="relative group">
                <motion.span
                  className={`text-foreground/80 hover:text-primary transition-colors font-mts ${
                    pathname === item.href ? 'text-primary' : ''
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <TranslatedText tKey={item.name} fallback={item.fallback} />
                </motion.span>
                {pathname === item.href && (
                  <motion.div
                    layoutId="navbar"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-primary"
                  />
                )}
              </Link>
            ))}

            <div className="flex items-center space-x-2">
              <ThemeSwitcher />
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="text-muted-foreground"
              >
                <Globe className="h-4 w-4 mr-2" />
                <LanguageDisplay />
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-10 w-14 flex items-center justify-center"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 pb-2 border-t border-border"
          >
            <div className="flex flex-col space-y-3 pt-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-foreground/80 hover:text-primary transition-colors font-mts ${
                    pathname === item.href ? 'text-primary' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <TranslatedText tKey={item.name} fallback={item.fallback} />
                </Link>
              ))}
              <div className="flex items-center space-x-2 pt-2">
                <ThemeSwitcher />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleLanguage}
                  className="text-muted-foreground justify-start"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  <LanguageDisplay />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

export default Header
