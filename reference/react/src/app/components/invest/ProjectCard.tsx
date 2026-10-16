import { Link } from "react-router";
import { MapPin, TrendingUp, Download, Building2, Bookmark } from "lucide-react";
import { StatusBadge } from "./StatusBadge";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface ProjectCardProps {
  id: string;
  title: string;
  sector: string;
  location: string;
  investment: string;
  roi?: string;
  landSize?: string;
  status?: string;
  image?: string;
  description?: string;
  onSave?: () => void;
}

export function ProjectCard({
  id,
  title,
  sector,
  location,
  investment,
  roi,
  landSize,
  status = "available",
  image,
  description,
  onSave
}: ProjectCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-gray-100 group">
      <Link to={`/opportunities/${id}`} className="block">
        <div className="h-48 overflow-hidden relative">
          {image ? (
            <ImageWithFallback
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#123A63]/10 to-[#0F8A5F]/10 flex items-center justify-center">
              <Building2 className="h-16 w-16 text-[#123A63]/20" />
            </div>
          )}
          {onSave && (
            <button
              onClick={(e) => {
                e.preventDefault();
                onSave();
              }}
              className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-lg transition-colors"
            >
              <Bookmark className="h-4 w-4 text-[#123A63]" />
            </button>
          )}
        </div>
      </Link>

      <div className="p-6">
        <div className="flex gap-2 mb-3 flex-wrap">
          <StatusBadge variant="sector" label={sector} />
          {status && status !== "available" && (
            <StatusBadge variant="status" status={status as any} label={status} />
          )}
        </div>

        <Link to={`/opportunities/${id}`}>
          <h3 className="text-xl font-semibold text-[#1F2933] mb-3 group-hover:text-[#123A63] transition-colors">
            {title}
          </h3>
        </Link>

        {description && (
          <p className="text-sm text-[#667085] mb-4 line-clamp-2">{description}</p>
        )}

        <div className="space-y-2 text-sm text-[#667085] mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 flex-shrink-0" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 flex-shrink-0" />
            <span>{investment}</span>
          </div>
          {landSize && (
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 flex-shrink-0" />
              <span>{landSize}</span>
            </div>
          )}
          {roi && (
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 flex-shrink-0 text-[#0F8A5F]" />
              <span className="text-[#0F8A5F] font-semibold">ROI: {roi}</span>
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <Link to={`/opportunities/${id}`} className="flex-1">
            <Button className="w-full bg-[#0F8A5F] hover:bg-[#0F8A5F]/90">
              View Project
            </Button>
          </Link>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
