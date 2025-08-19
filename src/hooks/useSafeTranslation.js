'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function useSafeTranslation() {
  const translation = useTranslation();
  const [mounted, setMounted] = useState(false);
  
  // Handle case when useTranslation returns undefined or incomplete object
  const t = translation?.t;
  const i18n = translation?.i18n;
  const ready = translation?.ready;

  useEffect(() => {
    setMounted(true);
  }, []);

  const safeT = (key, fallback) => {
    if (!mounted || !ready || !t) {
      return fallback || key;
    }
    return t(key);
  };

  const safeLanguage = () => {
    if (!mounted || !ready || !i18n?.language) {
      return 'en';
    }
    return i18n.language;
  };

  const safeChangeLanguage = (lng) => {
    if (mounted && ready && i18n?.changeLanguage) {
      i18n.changeLanguage(lng);
    }
  };

  return {
    t: safeT,
    i18n: {
      language: safeLanguage(),
      changeLanguage: safeChangeLanguage,
    },
    ready: mounted && ready,
  };
}
