import React from 'react';
import { PageId } from '../types';
import { DMC_COMPANY_INFO } from '../data/immigrationData';
import {
  ShieldCheck,
  Building2,
  Award,
  Globe2,
  ArrowRight,
  CheckCircle2,
  Users2,
  Target,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  return (
    <div className="pt-24 pb-20">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-18 relative overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img
            src="/src/assets/images/consultation_office_1791647668616.jpg"
            alt="DMC Consulting Office"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-[#0A2E18]/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              <span>About DMC Immigration Consultants</span>
              <span aria-hidden="true">·</span>
              <span>Dubai, UAE</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Guidance for Your Next Chapter.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Founded in Dubai to deliver transparent, ethical, and high-standard immigration consulting, DMC connects international ambition with legally verified pathways across Canada, Australia, the UK, Europe, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative & Company Background */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 text-sm text-slate-600 leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Rooted in Dubai, Connected Globally
              </h2>
              <p>
                Headquartered at <strong className="text-slate-900">{DMC_COMPANY_INFO.headquarters}</strong>, DMC Immigration Consultants has grown into one of the UAE’s recognized advisory firms for skilled migration, corporate relocation, and overseas resettlement.
              </p>
              <p>
                Our philosophy was forged from a clear observation: prospective migrants frequently face complex government rules, opaque promises, and confusing fee structures. DMC was founded to provide the opposite — absolute legal clarity, detailed eligibility scoring before contract signing, and honest timelines.
              </p>
              <p>
                Whether you are a senior software architect targeting Canadian Express Entry, a healthcare professional pursuing Australian General Skilled Migration, or a business founder establishing a UK enterprise, our 35+ in-house consultants work with registered statutory legal counsel to ensure compliance at every juncture.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex-1 min-w-[200px]">
                  <div className="text-xl font-bold text-[#14532D]">35+ In-House</div>
                  <div className="text-xs text-slate-500 mt-0.5">Specialized Case Managers</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex-1 min-w-[200px]">
                  <div className="text-xl font-bold text-[#14532D]">Latifa Tower</div>
                  <div className="text-xs text-slate-500 mt-0.5">Sheikh Zayed Road Landmark</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-emerald-950 text-white rounded-3xl p-8 border border-emerald-800 shadow-xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-[#22C55E] flex items-center justify-center font-bold">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base">Our Core Mission</h3>
                    <p className="text-xs text-emerald-300">Clarity without compromise</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  To empower families, professionals, and entrepreneurs across the UAE and Gulf region to navigate international relocation with dignity, legal certainty, and structured support.
                </p>

                <div className="border-t border-emerald-900 pt-4 space-y-2.5 text-xs text-slate-200">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                    <span>Strict compliance with IRCC, MARA, and Home Office codes</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                    <span>No misleading success statistics or fake visa guarantees</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                    <span>Direct personal access to your appointed case officer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Professional Principles
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              The four foundational pillars that define our daily consultation work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
              <ShieldCheck className="w-8 h-8 text-[#16A34A] mb-4" />
              <h3 className="font-bold text-slate-900 text-sm mb-2">1. Legal Integrity</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We accept applications only after an objective initial audit demonstrates real, legal merit under current statutory immigration thresholds.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
              <Users2 className="w-8 h-8 text-[#16A34A] mb-4" />
              <h3 className="font-bold text-slate-900 text-sm mb-2">2. Personalized Care</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                No cookie-cutter templates. Every family or corporate file has unique circumstances that require bespoke documentation strategies.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
              <Building2 className="w-8 h-8 text-[#16A34A] mb-4" />
              <h3 className="font-bold text-slate-900 text-sm mb-2">3. Physical Presence</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We maintain an open, accessible corporate office on Sheikh Zayed Road. Clients are welcome to meet their case handlers face-to-face.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
              <Globe2 className="w-8 h-8 text-[#16A34A] mb-4" />
              <h3 className="font-bold text-slate-900 text-sm mb-2">4. Holistic Relocation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Beyond visa lodgement, we support pre-landing planning, credential translation, overseas banking, and initial community settlement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="pt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#14532D] rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Meet Our Consultants on Sheikh Zayed Road
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl mx-auto mb-6">
              Book a private assessment at Latifa Tower or connect with our team over video call to explore your opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-950 bg-[#22C55E] hover:bg-emerald-300 transition-colors"
              >
                Schedule In-Person Meeting
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
              >
                Office Location & Directions
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
