import React, { useState } from 'react';
import { PageId, ServiceItem, DestinationItem } from '../types';
import {
  SERVICES_DATA,
  DESTINATIONS_DATA,
  PROCESS_STEPS,
  TESTIMONIALS_DATA,
  FAQS_DATA,
  DMC_COMPANY_INFO,
} from '../data/immigrationData';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Globe2,
  ShieldCheck,
  Building2,
  Award,
  ChevronDown,
  Calculator,
  Compass,
  FileCheck2,
  Clock,
  Sparkles,
  MapPin,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (preselectedDest?: string, preselectedServ?: string) => void;
  onOpenPointsCalculator: () => void;
  onSelectService: (service: ServiceItem) => void;
  onSelectDestination: (destination: DestinationItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenPointsCalculator,
  onSelectService,
  onSelectDestination,
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<string>('all');

  const filteredServices =
    selectedServiceCategory === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === selectedServiceCategory);

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-slate-950">
        {/* Background Image with Cinematic Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_dubai_skyline_1791647620679.jpg"
            alt="Dubai skyline Sheikh Zayed Road"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-45 scale-102 transition-transform duration-1000"
          />
          {/* Subtle brand-colored green gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-[#0A2E18]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(22,163,74,0.25),transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: Main Typography & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-semibold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>YOUR FUTURE · YOUR NEXT CHAPTER</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] text-balance">
                Your Global Journey <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-200 to-[#22C55E]">
                  Starts Here.
                </span>
              </h1>

              {/* Supporting Copy */}
              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                Navigate your international ambitions with professional immigration guidance, personalized support, and a clearer path toward your next opportunity.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenConsultation()}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-[#16A34A] hover:bg-[#22C55E] active:bg-[#15803D] transition-all duration-200 shadow-lg shadow-emerald-950/40 transform hover:-translate-y-0.5"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/18 border border-white/20 backdrop-blur-md transition-all duration-200"
                >
                  <span>Explore Our Services</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onOpenPointsCalculator}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-medium text-emerald-300 hover:text-white hover:bg-emerald-950/50 transition-colors"
                >
                  <Calculator className="w-4 h-4 text-[#22C55E]" />
                  <span>Check Points Score</span>
                </button>
              </div>

              {/* Trust signals */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                  <span>Registered & Licensed Advisors</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#22C55E]" />
                  <span>Latifa Tower, Sheikh Zayed Rd</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe2 className="w-4 h-4 text-[#22C55E]" />
                  <span>Canada · Australia · UK · Europe</span>
                </div>
              </div>
            </div>

            {/* Right Col: Glass-effect Consultation Quick-Card */}
            <div className="lg:col-span-5">
              <div className="glass-panel-dark rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-white/15">
                <div className="flex items-center justify-between pb-4 border-b border-emerald-900/60 mb-5">
                  <div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-emerald-300 block">
                      Fast-Track Assessment
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      Where would you like to migrate?
                    </h3>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-[#22C55E]">
                    <Compass className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-3">
                  {DESTINATIONS_DATA.slice(0, 4).map((dest) => (
                    <button
                      key={dest.id}
                      onClick={() => onOpenConsultation(dest.name)}
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 transition-colors group text-left"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-7 h-7 rounded-lg bg-emerald-900/60 flex items-center justify-center text-xs font-bold text-emerald-300">
                          {dest.code}
                        </span>
                        <div>
                          <div className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                            {dest.name}
                          </div>
                          <div className="text-[11px] text-slate-400 truncate max-w-[200px]">
                            {dest.popularPathways[0].title}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-300 group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-emerald-900/60 flex items-center justify-between text-xs">
                  <span className="text-slate-300">Prefer phone discussion?</span>
                  <a
                    href={`tel:${DMC_COMPANY_INFO.phone}`}
                    className="font-bold text-[#22C55E] hover:underline"
                  >
                    {DMC_COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROOF STRIP (CLAIM-TO-PROOF ADJACENCY) */}
      <section className="bg-white border-y border-slate-200/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#14532D] tabular-nums">
                10+ Years
              </div>
              <div className="text-xs font-medium text-slate-600 mt-1">
                Dubai Advisory Presence
              </div>
            </div>
            <div className="p-3 border-l border-slate-200">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#14532D] tabular-nums">
                35+ Specialists
              </div>
              <div className="text-xs font-medium text-slate-600 mt-1">
                Dedicated Case Handlers
              </div>
            </div>
            <div className="p-3 border-l border-slate-200">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#14532D] tabular-nums">
                6 Jurisdictions
              </div>
              <div className="text-xs font-medium text-slate-600 mt-1">
                Statutory Pathways Managed
              </div>
            </div>
            <div className="p-3 border-l border-slate-200">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#14532D] tabular-nums">
                100% Fixed
              </div>
              <div className="text-xs font-medium text-slate-600 mt-1">
                Transparent Fee Contracts
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE IMMIGRATION SERVICES */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header & Category Filter Buttons */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#16A34A] uppercase tracking-wider mb-2">
                <span>Verified Offerings</span>
                <span aria-hidden="true">·</span>
                <span>Tailored Solutions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Immigration & Relocation Services
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-xl">
                Comprehensive advisory tailored to corporate executives, skilled professionals, students, and expanding enterprises.
              </p>
            </div>

            {/* Segmented Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/70 rounded-2xl">
              {[
                { id: 'all', label: 'All Services' },
                { id: 'skilled', label: 'Skilled' },
                { id: 'business', label: 'Business & Investor' },
                { id: 'student', label: 'Student' },
                { id: 'resettlement', label: 'Resettlement' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedServiceCategory(tab.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                    selectedServiceCategory === tab.id
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className="text-xs font-bold text-[#14532D] bg-emerald-50 px-2.5 py-1 rounded-lg">
                      {service.category.toUpperCase()}
                    </span>
                    {service.badgeText && (
                      <span className="text-[11px] font-semibold text-[#16A34A]">
                        {service.badgeText}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#14532D] transition-colors mb-2">
                    {service.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {service.shortDescription}
                  </p>

                  <div className="space-y-2 mb-6 text-xs text-slate-700">
                    <div className="font-semibold text-slate-900 text-[11px] uppercase tracking-wide">
                      Key Milestones:
                    </div>
                    {service.processOverview.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-tight text-slate-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs font-bold text-[#14532D] hover:text-[#16A34A] transition-colors inline-flex items-center gap-1"
                  >
                    <span>View Roadmap</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenConsultation(undefined, service.name)}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-50 text-[#14532D] hover:bg-[#14532D] hover:text-white transition-all"
                  >
                    Discuss Case
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#14532D] hover:text-[#16A34A] bg-white border border-slate-200 px-6 py-3 rounded-xl transition-all"
            >
              <span>Explore All Immigration Services & Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. DESTINATIONS SHOWCASE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#16A34A] uppercase tracking-wider mb-2">
              <span>Global Opportunities</span>
              <span aria-hidden="true">·</span>
              <span>Primary Jurisdictions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Destinations We Support
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              From permanent residency in Canada and Australia to commercial establishment in the UK and European Golden Visas.
            </p>
          </div>

          {/* Asymmetric Destination Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DESTINATIONS_DATA.map((dest) => (
              <div
                key={dest.id}
                className="group relative rounded-3xl overflow-hidden border border-slate-200/80 bg-slate-900 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-end min-h-[380px]"
              >
                <img
                  src={dest.imageAsset}
                  alt={dest.name}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                <div className="relative z-10 p-6 sm:p-7 text-white">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{dest.code} · Primary Destination</span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight mb-2">
                    {dest.name}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-2">
                    {dest.tagline}
                  </p>

                  <div className="space-y-1 mb-5 text-[11px] text-emerald-200/90 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10">
                    <div className="font-semibold text-white">Top Pathway:</div>
                    <div>{dest.popularPathways[0].title}</div>
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-2">
                    <button
                      onClick={() => onSelectDestination(dest)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-emerald-300 transition-colors"
                    >
                      <span>Explore Options</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onOpenConsultation(dest.name)}
                      className="px-3 py-1.5 text-xs font-bold text-slate-900 bg-white hover:bg-emerald-300 rounded-lg transition-colors"
                    >
                      Apply for {dest.name}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('destinations')}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 px-6 py-3 rounded-xl transition-colors"
            >
              <span>View Full Destination Comparison & Requirements</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE DMC IMMIGRATION */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(22,163,74,0.15),transparent_60%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                <span>The DMC Standard</span>
                <span aria-hidden="true">·</span>
                <span>Dubai Headquartered</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Clarity for Every Step of Your Journey.
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                Navigating foreign immigration systems can be complex and daunting. At DMC Immigration Consultants, we replace uncertainty with meticulous legal vetting, realistic timelines, and absolute fee transparency.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Zero false promises — we only take cases with viable legal merits',
                  'Registered MARA & CICC partner network for lawful compliance',
                  'Dedicated senior case manager assigned to every profile',
                  'Transparent stage-by-stage contract without hidden surprises',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  onClick={() => onNavigate('why-us')}
                  className="px-5 py-3 rounded-xl text-xs font-semibold text-slate-950 bg-[#22C55E] hover:bg-emerald-300 transition-colors"
                >
                  Our Client Charter
                </button>
                <button
                  onClick={onOpenPointsCalculator}
                  className="px-5 py-3 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
                >
                  Calculate Your Points
                </button>
              </div>
            </div>

            {/* Office photo & Latifa Tower presence card */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
                <img
                  src="/src/assets/images/consultation_office_1791647668616.jpg"
                  alt="DMC Dubai Office Consultation Room"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="p-6 bg-slate-900/90 backdrop-blur-md border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-xs font-bold text-white">
                      DMC Immigration Executive Headquarters
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Office 3604, Latifa Tower, Sheikh Zayed Road, Dubai, UAE
                    </div>
                  </div>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#22C55E] hover:underline"
                  >
                    <span>Visit Dubai Office</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. IMMIGRATION PROCESS SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#16A34A] uppercase tracking-wider mb-2">
              <span>Structured Methodology</span>
              <span aria-hidden="true">·</span>
              <span>Step-by-Step</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our 5-Stage Consultancy Process
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              A transparent, organized roadmap from your first enquiry to settlement abroad.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs flex flex-col justify-between relative group hover:border-[#16A34A] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-[#14532D] tracking-tight">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 text-[10px] text-[#14532D] font-medium">
                  Deliverable: <span className="font-semibold text-slate-800">{step.deliverable}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 rounded-2xl bg-emerald-50 border border-emerald-100 max-w-3xl mx-auto flex items-start gap-3 text-xs text-slate-700">
            <ShieldCheck className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
            <p>
              <strong>Regulatory Integrity:</strong> DMC provides professional preparation and lodgement support. Final processing timelines and decisions are determined exclusively by official immigration departments.
            </p>
          </div>
        </div>
      </section>

      {/* 7. CLIENT EXPERIENCES / TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#16A34A] uppercase tracking-wider mb-2">
              <span>Verified Client Feedback</span>
              <span aria-hidden="true">·</span>
              <span>Real Experiences</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Trusted by UAE Professionals
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Hear directly from clients who partnered with DMC for their overseas permanent residency and business migration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-4 pb-3 border-b border-slate-200/60">
                    <span className="font-semibold text-[#14532D]">{t.destinationCountry}</span>
                    <span>Approved {t.yearApproved}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-2">
                  <div className="font-bold text-slate-900 text-sm">
                    {t.clientName}
                  </div>
                  <div className="text-xs text-slate-500">
                    {t.profession}
                  </div>
                  <div className="text-[11px] text-[#16A34A] font-medium mt-0.5">
                    {t.visaCategory}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQS SECTION */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#16A34A] uppercase tracking-wider mb-2">
              <span>Frequently Asked Questions</span>
              <span aria-hidden="true">·</span>
              <span>Transparent Answers</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Everything You Need to Know
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-sm font-bold text-slate-900 hover:text-[#14532D] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#16A34A]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. FINAL CALL TO ACTION BANNER */}
      <section className="py-20 bg-gradient-to-br from-[#14532D] via-[#0F4A24] to-[#0A2E18] text-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Dubai Head Office · Sheikh Zayed Road</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-balance">
            Let’s Explore Your Next Opportunity.
          </h2>

          <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Connect with our registered consultants in Dubai for a transparent assessment of your eligibility, points, and optimal visa pathways.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenConsultation()}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-[#0A2E18] bg-[#22C55E] hover:bg-emerald-300 transition-all shadow-lg"
            >
              <span>Book In-Person Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${DMC_COMPANY_INFO.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs text-white bg-white/15 hover:bg-white/25 border border-white/20 transition-all"
            >
              <span>Chat on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
