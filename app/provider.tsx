'use client';
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/themeToggle'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

export function Providers({children}:{children:React.ReactNode}) {
  return (
    <SessionProvider>
          <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
            <div>
              <ModeToggle/>
            </div>
              {children}
            </ThemeProvider>
    </SessionProvider>
  );
}

