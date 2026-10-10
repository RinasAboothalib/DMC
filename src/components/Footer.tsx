import React from 'react';
import { DMCLogo } from './DMCLogo';
import { PageId } from '../types';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { DMC_COMPANY_INFO } from '../data/immigrationData';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <footer className="bg-[#0A2E18] text-slate-300 pt-16 pb-12 border-t border-emerald-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-emerald-900/50">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="cursor-pointer" onClick={() => onNavigate('home')}>
              <DMCLogo size={42} showWordmark={true} isLightMode={true} />
            </div>
            <p className="text-xs text-slate-300/80 leading-relaxed max-w-sm mt-3">
              DMC Immigration Consultants is a premier international mobility consultancy headquartered in Latifa Tower, Sheikh Zayed Road, Dubai. We provide clear, ethical, and structured guidance for professionals, entrepreneurs, and families seeking permanent residency and global business expansion.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={DMC_COMPANY_INFO.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-emerald-900/50 hover:bg-[#16A34A] flex items-center justify-center text-white transition-colors text-xs font-bold"
                aria-label="Facebook page"
              >
                FB
              </a>
              <a
                href={DMC_COMPANY_INFO.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-emerald-900/50 hover:bg-[#16A34A] flex items-center justify-center text-white transition-colors text-xs font-bold"
                aria-label="LinkedIn profile"
              >
                IN
              </a>
              <a
                href={`https://wa.me/${DMC_COMPANY_INFO.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#16A34A] hover:bg-[#22C55E] text-white text-xs font-semibold transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Dubai</span>
              </a>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                >
                  Immigration Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('destinations')}
                  className="hover:text-white transition-colors"
                >
                  Global Destinations
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('why-us')}
                  className="hover:text-white transition-colors"
                >
                  Why Choose DMC
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact Dubai Office
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Top Programs */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
              Top Pathways
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('destinations')}
                  className="hover:text-white transition-colors"
                >
                  Canada Express Entry & PNPs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('destinations')}
                  className="hover:text-white transition-colors"
                >
                  Australia Subclass 189 / 190 / 491
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('destinations')}
                  className="hover:text-white transition-colors"
                >
                  UK Skilled Worker & Innovator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('destinations')}
                  className="hover:text-white transition-colors"
                >
                  New Zealand Skilled Migrant
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('destinations')}
                  className="hover:text-white transition-colors"
                >
                  European Union Golden Visas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors"
                >
                  Overseas Business Setup
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Verified Dubai Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
              Dubai Headquarters
            </h4>
            <ul className="space-y-3 text-xs text-slate-300/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                <span>{DMC_COMPANY_INFO.headquarters}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#22C55E] shrink-0" />
                <a href={`tel:${DMC_COMPANY_INFO.phone}`} className="hover:text-white">
                  {DMC_COMPANY_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#22C55E] shrink-0" />
                <a href={`mailto:${DMC_COMPANY_INFO.email}`} className="hover:text-white">
                  {DMC_COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                <span>{DMC_COMPANY_INFO.businessHours}</span>
              </li>
            </ul>

            <div className="pt-4">
              <button
                onClick={onOpenConsultation}
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold text-[#0A2E18] bg-[#22C55E] hover:bg-emerald-300 transition-colors"
              >
                <span>Book Dubai Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Legal & Regulatory Disclaimer */}
        <div className="pt-8 pb-4 text-[11px] text-slate-400/80 space-y-3">
          <div className="flex items-start gap-2 bg-emerald-950/40 p-3.5 rounded-xl border border-emerald-900/30">
            <ShieldCheck className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Regulatory Notice & Transparency Statement:</strong> DMC Immigration Consultants (DM Consultant AE) operates as a private immigration and corporate mobility consultancy in Dubai, UAE. We provide document assistance, procedural assessment, and application support. We are not an immigration department of any foreign government. Visa issuance decisions are strictly at the sole discretion of respective sovereign immigration authorities (such as IRCC, Australia DHA, or UK Visas and Immigration). DMC does not guarantee visa approvals or employment placement abroad.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div>
              © {new Date().getFullYear()} DMC Immigration Consultants. All rights reserved. Registered in Dubai, UAE.
            </div>

            <div className="flex items-center gap-4 text-xs">
              <button
                onClick={() => onNavigate('privacy')}
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <span>·</span>
              <button
                onClick={() => onNavigate('why-us')}
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </button>
              <span>·</span>
              <a
                href={DMC_COMPANY_INFO.socialLinks.website}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                dm-consultant.ae
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
