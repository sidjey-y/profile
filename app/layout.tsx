import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Carla Joy Haboc - Portfolio",
  description: "Hello, I'm Sidjey! I'm currently a BS Computer Science student specializing Statistical Computing",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Simple script to set the initial theme */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              // Check for saved theme preference or use system preference
              const savedTheme = localStorage.getItem('theme');
              const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              
              // Determine which theme to apply
              const isDark = savedTheme === 'dark' || 
                             (!savedTheme && systemPrefersDark);
              
              // Apply the correct theme class immediately
              if (isDark) {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
              
              // Store the theme if it's not already saved
              if (!savedTheme) {
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
              }
            } catch (e) { 
              console.error('Error setting initial theme:', e); 
            }
          })();
        `}} />
      </head>
      <body className={inter.className}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem={true}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
