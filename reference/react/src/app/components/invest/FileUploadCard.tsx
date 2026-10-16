import { Upload, File, X, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { StatusBadge } from "./StatusBadge";
import { Button } from "../ui/button";

type UploadStatus = "not-uploaded" | "uploaded" | "verified" | "needs-correction";

interface FileUploadCardProps {
  title: string;
  description?: string;
  required?: boolean;
  status?: UploadStatus;
  fileName?: string;
  adminComment?: string;
  onUpload?: (file: File) => void;
  onRemove?: () => void;
  onDownload?: () => void;
  className?: string;
}

export function FileUploadCard({
  title,
  description,
  required = false,
  status = "not-uploaded",
  fileName,
  adminComment,
  onUpload,
  onRemove,
  onDownload,
  className
}: FileUploadCardProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0 && onUpload) {
      onUpload(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0 && onUpload) {
      onUpload(files[0]);
    }
  };

  const statusIcon = {
    "not-uploaded": null,
    "uploaded": <File className="h-4 w-4 text-blue-600" />,
    "verified": <CheckCircle2 className="h-4 w-4 text-green-600" />,
    "needs-correction": <AlertCircle className="h-4 w-4 text-red-600" />,
  };

  return (
    <div className={cn("bg-white rounded-lg border border-gray-200 p-4", className)}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-semibold text-[#1F2933]">{title}</h4>
            <StatusBadge
              variant={required ? "required" : "optional"}
              label={required ? "Required" : "Optional"}
            />
          </div>
          {description && (
            <p className="text-sm text-[#667085]">{description}</p>
          )}
        </div>
        <StatusBadge variant="document" status={status} label={status.replace(/-/g, " ")} />
      </div>

      {status === "not-uploaded" ? (
        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={cn(
            "border-2 border-dashed rounded-lg p-6 text-center transition-colors",
            isDragging ? "border-[#123A63] bg-[#123A63]/5" : "border-gray-300"
          )}
        >
          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-[#667085] mb-3">
            Drag and drop your file here, or click to browse
          </p>
          <label className="cursor-pointer">
            <input
              type="file"
              className="hidden"
              onChange={handleFileSelect}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            />
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#123A63] text-white rounded-lg hover:bg-[#123A63]/90 transition-colors text-sm">
              <Upload className="h-4 w-4" />
              Select File
            </span>
          </label>
          <p className="text-xs text-[#667085] mt-2">
            Supported: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
          </p>
        </div>
      ) : (
        <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1">
              {statusIcon[status]}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-[#1F2933] truncate">
                  {fileName || "document.pdf"}
                </p>
                {status === "verified" && (
                  <p className="text-xs text-green-600">Verified by administration</p>
                )}
                {status === "needs-correction" && adminComment && (
                  <p className="text-xs text-red-600">{adminComment}</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-2">
              {onDownload && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onDownload}
                >
                  Download
                </Button>
              )}
              {onRemove && status !== "verified" && (
                <button
                  onClick={onRemove}
                  className="p-1 hover:bg-gray-200 rounded transition-colors"
                >
                  <X className="h-4 w-4 text-gray-500" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
