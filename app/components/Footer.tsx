"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter } from "lucide-react"
import Link from "next/link"
function Footer() {
  const [isDarkMode, setIsDarkMode] = React.useState(true)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 md:py-16 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-0">
          <div className="relative max-w-md">
            <h2 className="mb-4 md:mb-6 text-2xl md:text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Stay Connected
            </h2>
            <p className="mb-6 md:mb-8 text-sm md:text-base text-muted-foreground leading-relaxed">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="relative group">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm transition-all duration-300 border-muted-foreground/20"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-8 top-0 h-32 w-32 rounded-full bg-primary/10 blur-3xl animate-pulse" />
          </div>
          {/* <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block transition-colors hover:text-primary">
                Home
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                About Us
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                Services
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                Products
              </a>
              <a href="#" className="block transition-colors hover:text-primary">
                Contact
              </a>
            </nav>
          </div> */}
          {/* <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>123 Innovation Street</p>
              <p>Tech City, TC 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: hello@example.com</p>
            </address>
          </div> */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h3 className="mb-4 md:mb-6 text-lg font-semibold">Follow Us</h3>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Linkedin, label: "LinkedIn" }
                ].map(({ icon: Icon, label }) => (
                  <TooltipProvider key={label}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="rounded-full transition-all duration-300 hover:scale-110 hover:border-primary hover:text-primary"
                        >
                          <Icon className="h-4 w-4" />
                          <span className="sr-only">{label}</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Follow us on {label}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Sun className="h-4 w-4 text-yellow-500" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
                className="data-[state=checked]:bg-primary"
              />
              <Moon className="h-4 w-4 text-primary" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-16 flex flex-col items-center justify-between gap-4 md:gap-6 border-t pt-6 md:pt-8 text-center md:flex-row">
          <p className="text-xs md:text-sm text-muted-foreground">
            © 2024 Likhni. All rights reserved.
          </p>
          <nav className="flex gap-4 md:gap-6 text-xs md:text-sm">
            <Link href="/privacy-policy" className="transition-colors hover:text-primary underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="transition-colors hover:text-primary underline-offset-4 hover:underline">
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer;