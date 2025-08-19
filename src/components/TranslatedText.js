'use client';

import { useState, useEffect } from 'react';
import { useSafeTranslation } from '@/hooks/useSafeTranslation';

export default function TranslatedText({ tKey, fallback }) {
  const { t, ready } = useSafeTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Во время SSR и до инициализации i18n показываем fallback
  if (!mounted || !ready) {
    return fallback || tKey;
  }

  // После монтирования и инициализации показываем перевод
  return t(tKey, fallback);
}
