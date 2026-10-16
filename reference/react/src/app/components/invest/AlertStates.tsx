import { CheckCircle2, XCircle, AlertTriangle, Info, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

type AlertType = "success" | "error" | "warning" | "info";

interface AlertProps {
  type: AlertType;
  title: string;
  message: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}

const alertConfig = {
  success: {
    icon: CheckCircle2,
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    iconColor: "text-green-600",
    titleColor: "text-green-900",
    messageColor: "text-green-800"
  },
  error: {
    icon: XCircle,
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    iconColor: "text-red-600",
    titleColor: "text-red-900",
    messageColor: "text-red-800"
  },
  warning: {
    icon: AlertTriangle,
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    iconColor: "text-yellow-600",
    titleColor: "text-yellow-900",
    messageColor: "text-yellow-800"
  },
  info: {
    icon: Info,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-600",
    titleColor: "text-blue-900",
    messageColor: "text-blue-800"
  }
};

export function Alert({ type, title, message, dismissible = false, onDismiss, className }: AlertProps) {
  const [visible, setVisible] = useState(true);
  const config = alertConfig[type];
  const Icon = config.icon;

  if (!visible) return null;

  const handleDismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  return (
    <div className={cn(
      "rounded-lg border p-4",
      config.bgColor,
      config.borderColor,
      className
    )}>
      <div className="flex items-start gap-3">
        <Icon className={cn("h-5 w-5 flex-shrink-0 mt-0.5", config.iconColor)} />
        <div className="flex-1">
          <h3 className={cn("font-semibold mb-1", config.titleColor)}>{title}</h3>
          <p className={cn("text-sm", config.messageColor)}>{message}</p>
        </div>
        {dismissible && (
          <button
            onClick={handleDismiss}
            className={cn("p-1 rounded hover:bg-black/5 transition-colors", config.iconColor)}
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}

export function SuccessAlert({ title, message, ...props }: Omit<AlertProps, "type">) {
  return <Alert type="success" title={title} message={message} {...props} />;
}

export function ErrorAlert({ title, message, ...props }: Omit<AlertProps, "type">) {
  return <Alert type="error" title={title} message={message} {...props} />;
}

export function WarningAlert({ title, message, ...props }: Omit<AlertProps, "type">) {
  return <Alert type="warning" title={title} message={message} {...props} />;
}

export function InfoAlert({ title, message, ...props }: Omit<AlertProps, "type">) {
  return <Alert type="info" title={title} message={message} {...props} />;
}
