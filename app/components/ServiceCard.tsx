import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { ExternalLink, Share2 } from "lucide-react";
import { icons } from "lucide-react";

import { Button } from "@/components/ui/button";
import { toast } from "sonner"
import { motion } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ServiceCardProps {
  id: string
  title: string
  description: string
  url: string
  icon: string
  usersCount: string
  status?: "operational" | "maintenance" | "issues"
  features?: string[]
  tags: string[]
  category: string
  lastUpdated: string
}

export function ServiceCard({
  title,
  description,
  url,
  icon,
  usersCount,
  status = "operational",
  features = [],
}: ServiceCardProps) {
  const [showDialog, setShowDialog] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSharing, setIsSharing] = useState(false)
  const IconComponent = icons[icon as keyof typeof icons] || icons.Bot

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational": return "bg-emerald-500"
      case "maintenance": return "bg-yellow-500"
      case "issues": return "bg-red-500"
      default: return "bg-gray-500"
    }
  }

  const copyToClipboard = async () => {
    try {
      setIsSharing(true)
      await navigator.clipboard.writeText(url)
      toast.success("Link copied to clipboard")
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error("Failed to copy link")
    } finally {
      setIsSharing(false)
    }
  }

  const handleOpenService = async () => {
    try {
      setIsLoading(true)
      const newWindow = window.open(url, '_blank')
      if (!newWindow) {
        throw new Error('Popup blocked')
      }
    } catch (err) {
      toast.error("Failed to open service. Please check your popup blocker settings.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <TooltipProvider delayDuration={300}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <Card 
              onClick={() => setShowDialog(true)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setShowDialog(true)
                }
              }}
              tabIndex={0}
              role="button"
              className="cursor-pointer hover:shadow-lg transition-all duration-200 border border-border/50 hover:border-border group h-[140px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <CardHeader className="space-y-1 h-full">
                <div className="flex items-center gap-3 h-full">
                  <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors shrink-0">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {title}
                        </CardTitle>
                        <div className="flex items-center gap-2 shrink-0">
                          <div className={`w-2 h-2 rounded-full ${getStatusColor(status)}`} />
                          <span className="text-xs text-muted-foreground whitespace-nowrap">{usersCount} users</span>
                        </div>
                      </div>
                      <CardDescription className="line-clamp-2 mt-1">
                        {description}
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Click to view details</p>
          </TooltipContent>
        </Tooltip>

        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent 
            className="sm:max-w-[525px] p-4 sm:p-6"
            onEscapeKeyDown={() => setShowDialog(false)}
          >
            <DialogHeader className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-xl self-start">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <DialogTitle className="text-xl font-semibold">{title}</DialogTitle>
                  <DialogDescription className="text-sm leading-relaxed">
                    {description}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>

            {features.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-medium mb-3">Key Features:</h3>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  {features.map((feature, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <DialogFooter className="mt-8 flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                onClick={copyToClipboard}
                variant="outline"
                disabled={isSharing}
                className="w-full gap-2 hover:bg-primary/10 transition-colors"
              >
                <Share2 className={`w-4 h-4 ${isSharing ? 'animate-spin' : ''}`} />
                {isSharing ? 'Copying...' : 'Share Link'}
              </Button>
              <Button 
                onClick={handleOpenService}
                disabled={isLoading}
                className="w-full gap-2 hover:opacity-90 transition-opacity"
              >
                <ExternalLink className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                {isLoading ? 'Opening...' : 'Open Service'}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </motion.div>
    </TooltipProvider>
  );
} 