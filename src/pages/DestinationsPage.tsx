import React, { useState } from 'react';
import { PageId, DestinationItem } from '../types';
import { DESTINATIONS_DATA } from '../data/immigrationData';
import {
  ArrowRight,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Compass,
} from 'lucide-react';

interface DestinationsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (preselectedDest?: string) => void;
  onSelectDestination: (destination: DestinationItem) => void;
  onOpenPointsCalculator: () => void;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({
  onNavigate,
  onOpenConsultation,
  onSelectDestination,
  onOpenPointsCalculator,
}) => {
  const [activeCountry, setActiveCountry] = useState<string>('all');

  const filtered =
    activeCountry === 'all'
      ? DESTINATIONS_DATA
      : DESTINATIONS_DATA.filter((d) => d.id === activeCountry);

  return (
    <div className="pt-24 pb-20">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              <span>Global Opportunities</span>
              <span aria-hidden="true">·</span>
              <span>Supported Jurisdictions</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
              Destination Guides & Pathways
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore verified permanent residency routes, skilled migration lists, and commercial investment frameworks across premier global destinations.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation Strip */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-16 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveCountry('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                  activeCountry === 'all'
                    ? 'bg-[#14532D] text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Countries
              </button>
              {DESTINATIONS_DATA.map((dest) => (
                <button
                  key={dest.id}
                  onClick={() => setActiveCountry(dest.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                    activeCountry === dest.id
                      ? 'bg-[#14532D] text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {dest.name}
                </button>
              ))}
            </div>

            <button
              onClick={onOpenPointsCalculator}
              className="text-xs font-bold text-[#14532D] hover:text-[#16A34A] underline flex items-center gap-1"
            >
              <span>Simulate Points Score</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Destination In-Depth Cards */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {filtered.map((dest, idx) => (
            <div
              key={dest.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Photo Side */}
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[420px] bg-slate-900">
                  <img
                    src={dest.imageAsset}
                    alt={dest.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-lg bg-emerald-900/80 backdrop-blur-md text-emerald-200 font-bold text-xs border border-emerald-500/30">
                      {dest.code}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h2 className="text-3xl font-extrabold tracking-tight">
                      {dest.name}
                    </h2>
                    <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                      {dest.tagline}
                    </p>
                  </div>
                </div>

                {/* Details Side */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3 pb-3 border-b border-slate-100">
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        Program Architecture & Eligibility
                      </span>
                      <span className="text-[11px] text-slate-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#16A34A]" />
                        <span>Statutory Timelines Apply</span>
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {dest.overview}
                    </p>

                    {/* Pathways */}
                    <div className="space-y-3 mb-6">
                      <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                        Featured Immigration Routes:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {dest.popularPathways.map((p, pIdx) => (
                          <div
                            key={pIdx}
                            className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100"
                          >
                            <h3 className="text-xs font-bold text-slate-900 mb-1">
                              {p.title}
                            </h3>
                            <p className="text-[11px] text-slate-600 leading-normal mb-2">
                              {p.description}
                            </p>
                            <div className="text-[10px] text-[#14532D] font-medium pt-1.5 border-t border-slate-200/60">
                              For: {p.suitableFor}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Requirements checklist preview */}
                    <div className="bg-emerald-50/50 rounded-2xl p-4 border border-emerald-100 mb-6">
                      <div className="text-[11px] font-bold text-[#14532D] uppercase tracking-wider mb-2">
                        Core Assessment Thresholds:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {dest.keyRequirements.slice(0, 4).map((req, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                            <span className="text-[11px] leading-tight">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <button
                      onClick={() => onSelectDestination(dest)}
                      className="text-xs font-bold text-[#14532D] hover:text-[#16A34A] inline-flex items-center gap-1.5"
                    >
                      <span>Open Full Country Dossier</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onOpenConsultation(dest.name)}
                      className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#14532D] hover:bg-[#16A34A] transition-all shadow-xs"
                    >
                      Apply for {dest.name} Consultation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimers & Advice */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="p-5 rounded-2xl bg-white border border-slate-200 flex items-start gap-3.5 text-xs text-slate-600">
          <ShieldCheck className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Immigration Threshold Disclaimer:</strong> Immigration regulations, points score cutoffs, and eligible occupation lists are updated continuously by sovereign governments. DMC conducts initial evaluations in our Dubai office to establish current alignment before any formal lodgement is initiated.
          </p>
        </div>
      </section>
    </div>
  );
};
