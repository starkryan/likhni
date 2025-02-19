import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Activity, AlertTriangle, CheckCircle2 } from "lucide-react"

interface StatusBadgeProps {
  status: "operational" | "maintenance" | "issues"
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const statusConfig = {
    operational: {
      icon: CheckCircle2,
      text: "Operational",
      variant: "success" as const,
      description: "Service is running normally"
    },
    maintenance: {
      icon: Activity,
      text: "Maintenance",
      variant: "warning" as const,
      description: "Scheduled maintenance in progress"
    },
    issues: {
      icon: AlertTriangle,
      text: "Issues",
      variant: "destructive" as const,
      description: "Service is experiencing issues"
    }
  }

  const config = statusConfig[status]
  const Icon = config.icon

  return (
    <Tooltip>
      <TooltipTrigger>
        <Badge variant={config.variant as "default" | "secondary" | "outline" | "destructive" | null} className="gap-1">
          <Icon className="h-3 w-3" />
          {config.text}
        </Badge>
      </TooltipTrigger>
      <TooltipContent>
        <p>{config.description}</p>
      </TooltipContent>
    </Tooltip>
  )
} 