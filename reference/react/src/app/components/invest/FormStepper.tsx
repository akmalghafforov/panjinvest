import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  number: number;
  title: string;
}

interface FormStepperProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

export function FormStepper({ steps, currentStep, className }: FormStepperProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = currentStep > step.number;
          const isCurrent = currentStep === step.number;
          const isLast = index === steps.length - 1;

          return (
            <div key={step.number} className="flex items-center flex-1">
              {/* Step indicator */}
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-colors",
                    isCompleted && "bg-[#0F8A5F]",
                    isCurrent && "bg-[#123A63]",
                    !isCompleted && !isCurrent && "bg-gray-200"
                  )}
                >
                  {isCompleted ? (
                    <Check className="h-5 w-5 text-white" />
                  ) : (
                    <span className={cn(
                      "font-semibold",
                      isCurrent ? "text-white" : "text-gray-500"
                    )}>
                      {step.number}
                    </span>
                  )}
                </div>
                <span className={cn(
                  "mt-2 text-xs sm:text-sm text-center max-w-24 sm:max-w-none",
                  isCurrent ? "text-[#123A63] font-semibold" : "text-[#667085]"
                )}>
                  {step.title}
                </span>
              </div>

              {/* Connector line */}
              {!isLast && (
                <div
                  className={cn(
                    "flex-1 h-0.5 mx-2",
                    isCompleted ? "bg-[#0F8A5F]" : "bg-gray-200"
                  )}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
