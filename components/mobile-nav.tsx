"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col space-y-4 mt-8">
          <a
            href="#about"
            onClick={closeMenu}
            className="text-lg font-medium hover:text-primary transition-colors p-2 text-left"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={closeMenu}
            className="text-lg font-medium hover:text-primary transition-colors p-2 text-left"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={closeMenu}
            className="text-lg font-medium hover:text-primary transition-colors p-2 text-left"
          >
            Projects
          </a>
          <a
            href="#achievements"
            onClick={closeMenu}
            className="text-lg font-medium hover:text-primary transition-colors p-2 text-left"
          >
            Achievements
          </a>
          <a
            href="#gallery"
            onClick={closeMenu}
            className="text-lg font-medium hover:text-primary transition-colors p-2 text-left"
          >
            Gallery
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="text-lg font-medium hover:text-primary transition-colors p-2 text-left"
          >
            Contact
          </a>
        </div>
      </SheetContent>
    </Sheet>
  )
}
