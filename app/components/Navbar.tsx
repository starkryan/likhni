"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/app/components/mode-toggle"
import { Search, Menu } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useState } from "react"

export function Navbar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Mobile Menu */}
        <div className="flex items-center gap-1">
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Navigation Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6 mt-6">
                <Link href="/" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
                 
                  <span className="font-medium text-lg">Likhni</span>
                </Link>
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search services..."
                    className="w-full pl-8 pr-4"
                    aria-label="Search services"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Link href="/services" className="px-2 py-2 hover:bg-accent rounded-md transition-colors">
                    Services
                  </Link>
                  <Link href="/about" className="px-2 py-2 hover:bg-accent rounded-md transition-colors">
                    About
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Desktop Logo */}
          <Link href="/" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity md:ml-5">
           
            <span className="font-medium">Likhni</span>
          </Link>
        </div>

        {/* Search and Navigation */}
        <div className="flex items-center justify-end gap-3">
          <div className="hidden md:block md:flex-1 md:max-w-md">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search services..."
                className="w-full pl-8 pr-4"
                aria-label="Search services"
              />
            </div>
          </div>

          <nav className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/services">Services</Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/about">About</Link>
              </Button>
            </div>
            <div className="flex items-center mr-5">
              <ModeToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
} 