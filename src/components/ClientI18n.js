'use client';

import { useEffect, useState } from 'react';

export default function ClientI18n({ children }) {
  const [i18nReady, setI18nReady] = useState(false);

  useEffect(() => {
    // Initialize i18n only on client
    import('@/i18n').then(() => {
      setI18nReady(true);
    });
  }, []);

  if (!i18nReady) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-primary">Loading...</div>
      </div>
    );
  }

  return <>{children}</>;
}
