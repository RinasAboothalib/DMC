import React from 'react';
import { X, Check, FileText, Compass, ArrowRight, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookConsultation: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookConsultation,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-10">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#16A34A] uppercase tracking-wider mb-2">
            <span>DMC Immigration Services</span>
            <span aria-hidden="true">·</span>
            <span>Comprehensive Advisory</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
            {service.name}
          </h2>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Suitable for */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 mb-6">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wide block mb-1">
              Who This Pathway is Ideal For
            </span>
            <p className="text-xs text-slate-700 leading-relaxed">
              {service.whoIsItFor}
            </p>
          </div>

          {/* Process steps */}
          <div className="mb-6">
            <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#16A34A]" />
              <span>Consultancy Journey & Roadmap</span>
            </h3>
            <div className="space-y-2.5">
              {service.processOverview.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-[#14532D] font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                    {idx + 1}
                  </div>
                  <span className="text-slate-700 leading-normal">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility & Documents 2-col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-4">
              <h4 className="text-xs font-bold text-[#14532D] mb-2 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#16A34A]" />
                <span>Eligibility Factors</span>
              </h4>
              <ul className="space-y-1.5 text-[11px] text-slate-700">
                {service.eligibilityFactors.map((fact, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#16A34A]">•</span>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
              <h4 className="text-xs font-bold text-slate-900 mb-2 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-slate-600" />
                <span>Key Document Dossier</span>
              </h4>
              <ul className="space-y-1.5 text-[11px] text-slate-700">
                {service.typicalDocuments.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-slate-400">•</span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Destinations covered */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="text-xs font-semibold text-slate-500">Applicable Destinations:</span>
            {service.destinationsCovered.map((d, idx) => (
              <span key={idx} className="text-xs font-medium text-[#14532D] bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
                {d}
              </span>
            ))}
          </div>

          {/* Action CTA & Legal Clarification */}
          <div className="space-y-3">
            <button
              onClick={() => {
                onClose();
                onBookConsultation(service.name);
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-xs text-white bg-[#14532D] hover:bg-[#16A34A] transition-all"
            >
              <span>Discuss Your Case with a Senior Consultant</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
              <span>Statutory decisions remain subject to official immigration authority discretion.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
