"use client";

import { Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import ClientI18n from "@/components/ClientI18n";

const queryClient = new QueryClient();

export default function Providers({ children }) {
  return (
    <ClientI18n>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem={false}
        disableTransitionOnChange
      >
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={
            <div className="min-h-screen bg-background flex items-center justify-center">
              <div className="text-primary">Loading...</div>
            </div>
          }>
            {children}
            <Toaster 
              position="top-right"
              toastOptions={{
                style: {
                  background: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  color: 'hsl(var(--foreground))',
                }
              }}
            />
          </Suspense>
        </QueryClientProvider>
      </ThemeProvider>
    </ClientI18n>
  );
}
