"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(false)

  // useEffect only runs on the client, so we can safely show the UI
  useEffect(() => {
    setMounted(true)
    // Check if dark mode is active
    const isDarkMode = document.documentElement.classList.contains('dark')
    setIsDark(isDarkMode)
  }, [])

  // Very direct theme toggle function
  const toggleTheme = () => {
    // Get current state
    const isCurrentlyDark = document.documentElement.classList.contains('dark')
    // Toggle to opposite theme
    const newTheme = isCurrentlyDark ? 'light' : 'dark'
    
    // 1. Update local state
    setIsDark(!isCurrentlyDark)
    
    // 2. Update DOM directly
    document.documentElement.classList.toggle('dark', !isCurrentlyDark)
    
    // 3. Store in localStorage
    localStorage.setItem('theme', newTheme)
    
    // 4. Update next-themes (as backup)
    setTheme(newTheme)
  }

  // Avoid hydration mismatch by not rendering anything until client-side
  if (!mounted) {
    return <Button variant="outline" size="icon" className="border border-gray-300 dark:border-gray-600">
      <span className="h-5 w-5" />
    </Button>
  }

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={toggleTheme} 
      className="border border-gray-300 dark:border-gray-600"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      <span className="sr-only">{isDark ? "Light mode" : "Dark mode"}</span>
    </Button>
  )
}
