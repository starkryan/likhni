import { Button } from "@/components/ui/button"
import { Search, Compass, ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="absolute inset-0 -z-10 opacity-50">
          <div className="absolute right-0 top-0 -ml-24 transform-gpu overflow-hidden blur-3xl">
            <div className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-tr from-primary/30 to-primary/10" />
          </div>
        </div>

        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex items-center space-x-6 group">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary/20 flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                What's new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-muted-foreground group-hover:text-primary transition-colors">
                <span>Just shipped v1.0</span>
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Essential Services Directory
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Your one-stop directory for all essential government, travel, utilities, and banking services. Save time and access everything you need in one place.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button className="gap-2 shadow-lg hover:shadow-primary/25 transition-all duration-300">
              <Search className="h-4 w-4" />
              Explore Services
            </Button>
            <Button variant="outline" className="gap-2 hover:bg-primary/5">
              <Compass className="h-4 w-4" />
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 