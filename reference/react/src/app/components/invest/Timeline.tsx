import { CheckCircle2, Circle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineStep {
  title: string;
  description?: string;
  date?: string;
  status: "completed" | "current" | "upcoming";
}

interface TimelineProps {
  steps: TimelineStep[];
  className?: string;
}

export function Timeline({ steps, className }: TimelineProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;

        return (
          <div key={index} className="relative flex gap-4">
            {/* Line connector */}
            {!isLast && (
              <div className="absolute left-5 top-10 bottom-0 w-0.5 bg-gray-200" />
            )}

            {/* Icon */}
            <div className="relative flex-shrink-0">
              {step.status === "completed" && (
                <div className="w-10 h-10 rounded-full bg-[#0F8A5F] flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
              )}
              {step.status === "current" && (
                <div className="w-10 h-10 rounded-full bg-[#D6A536] flex items-center justify-center animate-pulse">
                  <Clock className="h-5 w-5 text-white" />
                </div>
              )}
              {step.status === "upcoming" && (
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <Circle className="h-5 w-5 text-gray-400" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 pt-1">
              <h4 className={cn(
                "font-semibold mb-1",
                step.status === "completed" && "text-[#0F8A5F]",
                step.status === "current" && "text-[#123A63]",
                step.status === "upcoming" && "text-gray-500"
              )}>
                {step.title}
              </h4>
              {step.description && (
                <p className="text-sm text-[#667085] mb-1">{step.description}</p>
              )}
              {step.date && (
                <p className="text-xs text-[#667085]">{step.date}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
