import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Link2, ExternalLink, Share2 } from "lucide-react";
import { icons } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { toast } from "sonner"
import { motion } from "framer-motion"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface ServiceCardProps {
  id: string
  title: string
  description: string
  url: string
  icon: string
  category: "government" | "banking" | "utilities" | "travel" | "education" | "healthcare" | "business"
  rating: number
  usersCount: string
  lastUpdated: string
  tags?: string[]
  status?: "operational" | "maintenance" | "issues"
  features?: string[]
  responseTime: string
  verifiedBy?: string[]
}

export function ServiceCard({
  
  title,
  description,
  url,
  icon,
  category,
  rating,
  usersCount,
  lastUpdated,
  tags = [],
  status = "operational",
  features = [],
  
  verifiedBy = []
}: ServiceCardProps) {
  const [showDialog, setShowDialog] = useState(false)
  
  const IconComponent = icons[icon as keyof typeof icons] || icons.Bot

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url).then(() => {
      toast.success("URL copied to clipboard")
    }).catch(() => {
      toast.error("Failed to copy URL")
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "operational":
        return "bg-emerald-500"
      case "maintenance":
        return "bg-yellow-500"
      case "issues":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "operational":
        return "Operational"
      case "maintenance":
        return "Under Maintenance"
      case "issues":
        return "Having Issues"
      default:
        return "Unknown"
    }
  }

  return (
    <TooltipProvider>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <Tooltip>
          <TooltipTrigger asChild>
            <Card 
              onClick={() => setShowDialog(true)}
              className="cursor-pointer hover:shadow-lg transition-all duration-200 border border-border/50 hover:border-border group relative"
            >
              <CardHeader className="space-y-1">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors duration-200">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {title}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${getStatusColor(status)}`} />
                        <span className="text-xs text-muted-foreground">{usersCount} users</span>
                      </div>
                    </div>
                    <CardDescription className="line-clamp-2 mt-1">
                      {description}
                    </CardDescription>
                    <div className="mt-3 flex flex-wrap items-center gap-1.5">
                      <Badge variant="default" className="text-xs font-medium">
                        {category}
                      </Badge>
                      {tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="text-xs font-medium">
                          {tag}
                        </Badge>
                      ))}
                      {tags.length > 2 && (
                        <Badge variant="secondary" className="text-xs font-medium">
                          +{tags.length - 2} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </TooltipTrigger>
          <TooltipContent>
            <p>Click to view details</p>
          </TooltipContent>
        </Tooltip>

        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-1.5">
                  <DialogTitle className="text-2xl font-semibold">{title}</DialogTitle>
                  <DialogDescription className="text-base leading-relaxed">
                    {description}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>

            <div className="mt-8 space-y-6">
              {/* Rating and Users Count */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Rating</p>
                  <span className="font-medium">{rating} / 5</span>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Users</p>
                  <span className="font-medium">{usersCount}</span>
                </div>
              </div>

              {/* Features - Moved to top */}
              {features.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Key Features
                  </h3>
                  <ul className="grid grid-cols-1 gap-2">
                    {features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-3 text-sm bg-gradient-to-r from-muted/40 to-muted/20 p-3 rounded-lg hover:from-muted/50 hover:to-muted/30 transition-all list-none"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Status and Response Time */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 hover:from-muted/60 hover:to-muted/40 transition-all">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Status</p>
                  <div className="flex items-center gap-2">
                    <div className={`w-2.5 h-2.5 rounded-full ${getStatusColor(status)} animate-pulse`} />
                    <span className="font-medium">{getStatusText(status)}</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30">
                  <p className="text-sm font-medium text-muted-foreground mb-2">Last Updated</p>
                  <span className="font-medium">{lastUpdated}</span>
                </div>
              </div>

              {/* Verified By */}
              {verifiedBy.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-muted-foreground">Verified By</h3>
                  <div className="flex flex-wrap gap-2">
                    {verifiedBy.map((verifier, index) => (
                      <Badge 
                        key={index} 
                        variant="outline"
                        className="px-3 py-1 rounded-lg"
                      >
                        {verifier}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              {tags && tags.length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-primary" />
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary"
                        className="px-3 py-1 rounded-lg hover:bg-secondary/80 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <DialogFooter className="flex flex-col-reverse sm:flex-row justify-between items-stretch sm:items-center gap-3 mt-8">
              <Button 
                variant="outline" 
                size="lg"
                onClick={(e) => {
                  e.stopPropagation();
                  copyToClipboard();
                }}
                className="w-full sm:w-auto hover:bg-muted/80 transition-colors"
              >
                <Link2 className="w-4 h-4 mr-2" />
                Copy URL
              </Button>
              <Button 
                onClick={() => window.open(url, '_blank')}
                className="gap-2 w-full sm:w-auto bg-primary hover:bg-primary/90 transition-colors"
                size="lg"
              >
                <ExternalLink className="w-4 h-4" />
                Open Service
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </motion.div>
    </TooltipProvider>
  );
} 