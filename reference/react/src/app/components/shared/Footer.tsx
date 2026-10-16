import { Link } from "react-router";
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#123A63] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Invest Panjakent</h3>
            <p className="text-white/70 text-sm mb-4">
              Gateway to tourism, agriculture, and sustainable growth in Tajikistan.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/opportunities" className="text-white/70 hover:text-white transition-colors">Investment Opportunities</Link></li>
              <li><Link to="/map" className="text-white/70 hover:text-white transition-colors">Investment Map</Link></li>
              <li><Link to="/guide" className="text-white/70 hover:text-white transition-colors">Investor Guide</Link></li>
              <li><Link to="/data" className="text-white/70 hover:text-white transition-colors">Data & Statistics</Link></li>
              <li><Link to="/documents" className="text-white/70 hover:text-white transition-colors">Documents</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">For Investors</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/portal" className="text-white/70 hover:text-white transition-colors">Investor Portal</Link></li>
              <li><Link to="/guide" className="text-white/70 hover:text-white transition-colors">Investment Guide</Link></li>
              <li><Link to="/opportunities" className="text-white/70 hover:text-white transition-colors">Submit Interest</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-white transition-colors">Investor Support</Link></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span className="text-white/70">Investment Department, Panjakent City Administration</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-white/70">+992 3422 5-XX-XX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-white/70">invest@panjakent.tj</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
          <p>© 2026 Panjakent City Administration. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
