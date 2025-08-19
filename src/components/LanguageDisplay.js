'use client';

import { useState, useEffect } from 'react';
import { useSafeTranslation } from '@/hooks/useSafeTranslation';

export default function LanguageDisplay() {
  const { i18n, ready } = useSafeTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Во время SSR и до инициализации i18n показываем дефолтное значение
  if (!mounted || !ready) {
    return 'EN';
  }

  // После монтирования и инициализации показываем текущий язык
  return i18n.language.toUpperCase();
}
