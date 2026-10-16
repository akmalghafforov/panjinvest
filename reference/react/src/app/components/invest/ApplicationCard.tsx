import { Link } from "react-router";
import { Calendar, User, ArrowRight } from "lucide-react";
import { StatusBadge } from "./StatusBadge";

interface ApplicationCardProps {
  id: string;
  projectName: string;
  sector: string;
  submittedDate: string;
  status: string;
  assignedOfficer?: string;
  nextAction?: string;
}

export function ApplicationCard({
  id,
  projectName,
  sector,
  submittedDate,
  status,
  assignedOfficer,
  nextAction
}: ApplicationCardProps) {
  return (
    <Link to={`/portal/applications/${id}`}>
      <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="font-semibold text-[#1F2933] mb-2">{projectName}</h3>
            <div className="flex gap-2 flex-wrap">
              <StatusBadge variant="sector" label={sector} />
              <StatusBadge variant="application" status={status as any} label={status.replace(/-/g, " ")} />
            </div>
          </div>
          <ArrowRight className="h-5 w-5 text-gray-400 flex-shrink-0" />
        </div>

        <div className="space-y-2 text-sm text-[#667085]">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>Submitted: {submittedDate}</span>
          </div>
          {assignedOfficer && (
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Officer: {assignedOfficer}</span>
            </div>
          )}
        </div>

        {nextAction && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm">
              <span className="text-[#667085]">Next action: </span>
              <span className="text-[#123A63] font-medium">{nextAction}</span>
            </p>
          </div>
        )}
      </div>
    </Link>
  );
}
