import { Phone, Mail } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#123A63] text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5" />
              <span>+992 3422 5-XX-XX</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3.5 w-3.5" />
              <span>invest@panjakent.tj</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/70">Language:</span>
            <button className="px-2 py-1 rounded bg-white/20 hover:bg-white/30 transition-colors">TJ</button>
            <button className="px-2 py-1 rounded hover:bg-white/10 transition-colors">RU</button>
            <button className="px-2 py-1 rounded hover:bg-white/10 transition-colors">EN</button>
          </div>
        </div>
      </div>
    </div>
  );
}
