import { cn } from "@/lib/utils";

type BadgeVariant = "sector" | "status" | "required" | "optional" | "document" | "application";

type StatusType =
  | "new" | "under-review" | "approved" | "rejected" | "pending" | "active" | "completed"
  | "submitted" | "contacted" | "negotiation" | "documents-pending" | "meeting-scheduled"
  | "not-uploaded" | "uploaded" | "verified" | "needs-correction";

interface StatusBadgeProps {
  variant: BadgeVariant;
  status?: StatusType;
  label: string;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  sector: "bg-[#123A63]/10 text-[#123A63]",
  status: "",
  required: "bg-red-50 text-red-700 border border-red-200",
  optional: "bg-gray-50 text-gray-600 border border-gray-200",
  document: "",
  application: "",
};

const statusStyles: Record<StatusType, string> = {
  "new": "bg-blue-50 text-blue-700 border border-blue-200",
  "under-review": "bg-yellow-50 text-yellow-700 border border-yellow-200",
  "approved": "bg-green-50 text-green-700 border border-green-200",
  "rejected": "bg-red-50 text-red-700 border border-red-200",
  "pending": "bg-orange-50 text-orange-700 border border-orange-200",
  "active": "bg-[#0F8A5F]/10 text-[#0F8A5F] border border-[#0F8A5F]/20",
  "completed": "bg-green-50 text-green-700 border border-green-200",
  "submitted": "bg-blue-50 text-blue-700 border border-blue-200",
  "contacted": "bg-purple-50 text-purple-700 border border-purple-200",
  "negotiation": "bg-indigo-50 text-indigo-700 border border-indigo-200",
  "documents-pending": "bg-orange-50 text-orange-700 border border-orange-200",
  "meeting-scheduled": "bg-cyan-50 text-cyan-700 border border-cyan-200",
  "not-uploaded": "bg-gray-50 text-gray-600 border border-gray-200",
  "uploaded": "bg-blue-50 text-blue-700 border border-blue-200",
  "verified": "bg-green-50 text-green-700 border border-green-200",
  "needs-correction": "bg-red-50 text-red-700 border border-red-200",
};

export function StatusBadge({ variant, status, label, className }: StatusBadgeProps) {
  const baseStyle = "px-3 py-1 text-xs rounded-full inline-flex items-center gap-1.5";

  let badgeStyle = variantStyles[variant];
  if ((variant === "status" || variant === "document" || variant === "application") && status) {
    badgeStyle = statusStyles[status];
  }

  return (
    <span className={cn(baseStyle, badgeStyle, className)}>
      {status && (variant === "status" || variant === "document" || variant === "application") && (
        <span className="w-1.5 h-1.5 rounded-full bg-current" />
      )}
      {label}
    </span>
  );
}
