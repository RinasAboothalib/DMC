import React from 'react';
import { PageId } from '../types';
import { DMC_COMPANY_INFO } from '../data/immigrationData';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  FileCheck2,
  Clock,
  ArrowRight,
  UserCheck,
  Building2,
  Scale,
} from 'lucide-react';

interface WhyChooseUsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: () => void;
  onOpenPointsCalculator: () => void;
}

export const WhyChooseUsPage: React.FC<WhyChooseUsPageProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenPointsCalculator,
}) => {
  return (
    <div className="pt-24 pb-20">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              <span>Why Choose DMC Immigration</span>
              <span aria-hidden="true">·</span>
              <span>Our Commitment</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
              Clarity for Every Step of Your Journey.
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We believe immigration consulting should be built on rigorous legal vetting, accessible local advisors, and honest expectations — never exaggerated promises.
            </p>
          </div>
        </div>
      </section>

      {/* The 4 Distinct DMC Advantages */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-[#14532D] flex items-center justify-center font-bold mb-4">
                <Scale className="w-5 h-5 text-[#16A34A]" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-2">Pre-Contract Assessment</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We evaluate your qualification documents, language bands, and age thresholds thoroughly before executing a formal consultancy contract.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-[#14532D] flex items-center justify-center font-bold mb-4">
                <UserCheck className="w-5 h-5 text-[#16A34A]" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-2">Dedicated Case Officer</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You work directly with an appointed case manager who knows your file, tracks deadlines, and provides clear status updates.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-[#14532D] flex items-center justify-center font-bold mb-4">
                <FileCheck2 className="w-5 h-5 text-[#16A34A]" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-2">Meticulous Dossier Audits</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every reference letter, credential evaluation, and statutory declaration undergoes multi-tier internal verification prior to lodgement.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-[#14532D] flex items-center justify-center font-bold mb-4">
                <Building2 className="w-5 h-5 text-[#16A34A]" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-2">Accessible Dubai HQ</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our doors are open on Sheikh Zayed Road (Latifa Tower). No anonymous call centers — you can meet our team face-to-face.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Matrix: DMC vs Generic Agents */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              The DMC Difference
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              How our ethical advisory model contrasts with unregulated marketing operators.
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs">
            <div className="grid grid-cols-12 bg-slate-100/80 p-4 text-xs font-bold text-slate-700 border-b border-slate-200">
              <div className="col-span-6 sm:col-span-5">Standard Consultancy Practice</div>
              <div className="col-span-6 sm:col-span-4 text-[#14532D] font-extrabold">
                DMC Immigration Consultants
              </div>
              <div className="hidden sm:block sm:col-span-3 text-slate-400">
                Generic Sales Agencies
              </div>
            </div>

            <div className="divide-y divide-slate-100 text-xs">
              {[
                {
                  criterion: 'Eligibility Vetting',
                  dmc: 'Detailed score breakdown & verified credential check first',
                  other: 'Aggressive sales pitches regardless of qualification score',
                },
                {
                  criterion: 'Approval Guarantees',
                  dmc: 'Honest disclaimer: Visa decisions remain sovereign government rights',
                  other: 'Unrealistic "100% Guaranteed Approval" claims',
                },
                {
                  criterion: 'Fee Structure',
                  dmc: 'Fixed-fee contractual agreement itemized in transparent stages',
                  other: 'Unexpected surprise add-ons and recurring undisclosed fees',
                },
                {
                  criterion: 'Regulatory Oversight',
                  dmc: 'Partnered with registered legal representatives (MARA & CICC affiliates)',
                  other: 'Unregulated middle-tier entities without legal standing',
                },
                {
                  criterion: 'Client Accessibility',
                  dmc: 'Walk-in corporate office in Latifa Tower, Sheikh Zayed Road',
                  other: 'Virtual-only presence or overseas forwarding numbers',
                },
              ].map((row, idx) => (
                <div key={idx} className="grid grid-cols-12 p-4 items-center gap-2">
                  <div className="col-span-12 sm:col-span-5 font-semibold text-slate-900">
                    {row.criterion}
                  </div>
                  <div className="col-span-12 sm:col-span-4 flex items-start gap-2 text-slate-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <span>{row.dmc}</span>
                  </div>
                  <div className="col-span-12 sm:col-span-3 flex items-start gap-2 text-slate-400 text-[11px]">
                    <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span>{row.other}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Action Banner */}
      <section className="pt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white">
            <h2 className="text-2xl font-bold mb-2">Ready to Experience True Clarity?</h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto mb-6">
              Book a 30-minute discovery consultation with our Dubai advisory team and receive an unvarnished audit of your overseas prospects.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 rounded-xl text-xs font-bold text-slate-950 bg-[#22C55E] hover:bg-emerald-300 transition-colors"
              >
                Schedule Preliminary Consultation
              </button>
              <button
                onClick={onOpenPointsCalculator}
                className="px-6 py-3 rounded-xl text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
              >
                Simulate Your Points Score
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
