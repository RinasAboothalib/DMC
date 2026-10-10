import React from 'react';
import { X, ArrowRight, ShieldCheck, MapPin, Clock, Award } from 'lucide-react';
import { DestinationItem } from '../types';

interface DestinationDetailModalProps {
  destination: DestinationItem | null;
  onClose: () => void;
  onBookConsultation: (destinationName: string) => void;
}

export const DestinationDetailModal: React.FC<DestinationDetailModalProps> = ({
  destination,
  onClose,
  onBookConsultation,
}) => {
  if (!destination) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-700 hover:text-slate-900 bg-white/90 hover:bg-white rounded-full transition-colors z-20 shadow-xs"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image with dark scrim */}
        <div className="relative h-56 sm:h-64 w-full bg-slate-900 overflow-hidden">
          <img
            src={destination.imageAsset}
            alt={destination.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 uppercase tracking-wider mb-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>International Destination Dossier</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Immigration to {destination.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-xl">
              {destination.tagline}
            </p>
          </div>
        </div>

        <div className="p-6 sm:p-10 space-y-6">
          {/* Overview */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
              Country Overview & Strategic Value
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {destination.overview}
            </p>
          </div>

          {/* Popular Pathways */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#16A34A]" />
              <span>Verified Immigration Pathways</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {destination.popularPathways.map((pathway, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 mb-1">
                      {pathway.title}
                    </h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed mb-2">
                      {pathway.description}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-200/60 text-[10px] text-[#14532D] font-medium">
                    Profile: {pathway.suitableFor}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Requirements & Processing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
              <h4 className="text-xs font-bold text-[#14532D] mb-2">
                Mandatory Assessment Criteria
              </h4>
              <ul className="space-y-1.5 text-[11px] text-slate-700">
                {destination.keyRequirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#16A34A] font-bold">✓</span>
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-600" />
                  <span>Statutory Processing Indicators</span>
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {destination.processingTimeInfo}
                </p>
              </div>
              <p className="text-[10px] text-slate-400 mt-3">
                *Subject to IRCC / Home Office queue backlogs and seasonal draw thresholds.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-2 space-y-3">
            <button
              onClick={() => {
                onClose();
                onBookConsultation(destination.name);
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-xs text-white bg-[#14532D] hover:bg-[#16A34A] transition-all"
            >
              <span>Explore My Eligibility for {destination.name}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
              <span>Personalized assessment conducted by DMC Dubai specialists.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
