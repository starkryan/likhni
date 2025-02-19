"use client"
import { Metadata } from "next"
import { ServiceTabs } from "@/app/components/ServiceTabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info, Sparkles, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

// export const metadata: Metadata = {
//   title: "Likhni | Your Essential Services Hub",
//   description: "Access all essential Indian government and utility services in one place. Likhni makes digital services simple and accessible.",
//   keywords: "likhni, essential services, government services, utility services, indian services",
//   openGraph: {
//     title: "Likhni | Your Essential Services Hub",
//     description: "Access all essential Indian government and utility services in one place.",
//     type: "website",
//     url: "https://likhni.com",
//   },
// }

export default function Home() {
  const [showProTip, setShowProTip] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <main className="flex flex-col items-center justify-center px-4">
        <section className="w-full max-w-[1200px] space-y-6 py-8 md:py-12">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 text-primary">
              <Sparkles className="h-6 w-6" />
              <span className="text-sm font-medium">Simplifying Digital Services</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Welcome to <span className="text-primary">Likhni</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Your one-stop platform for all essential Indian government and utility services. 
              Simple, secure, and hassle-free access to digital services.
            </p>
          </div>

          <div className="max-w-[700px] mx-auto space-y-2">
            <Button
              variant="ghost"
              className="w-full flex items-center justify-between text-primary hover:bg-primary/5 group"
              onClick={() => setShowProTip(!showProTip)}
            >
              <div className="flex items-center gap-2">
                <Info className="h-4 w-4" />
                <span className="font-semibold">Pro Tips</span>
              </div>
              <motion.div
                animate={{ rotate: showProTip ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </Button>

            <AnimatePresence>
              {showProTip && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Alert className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 backdrop-blur-sm">
                    <div className="flex gap-3">
                      <div className="shrink-0">
                        <Info className="h-5 w-5 text-primary animate-pulse" />
                      </div>
                      <div className="space-y-1">
                        <AlertTitle className="text-primary font-semibold">Pro Tips for Better Results</AlertTitle>
                        <AlertDescription className="text-primary/80 leading-relaxed">
                          <ul className="list-disc list-inside space-y-1.5">
                            <li>Use the search bar to quickly find specific services</li>
                            <li>Filter by categories to browse related services</li>
                            <li>All services are officially verified and updated daily</li>
                            <li>Save frequently used services for quick access</li>
                          </ul>
                        </AlertDescription>
                      </div>
                    </div>
                  </Alert>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="w-full">
            <ServiceTabs />
          </div>
        </section>
      </main>
    </div>
  )
}
