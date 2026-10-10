import React from 'react';
import { PageId } from '../types';
import { DMC_COMPANY_INFO } from '../data/immigrationData';
import { ShieldCheck, ArrowLeft, Mail, Building2 } from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigate: (page: PageId) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-24 pb-20">
      <section className="bg-slate-900 text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 mb-4 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </button>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
            Privacy Policy & Data Protection
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            DMC Immigration Consultants (DM Consultant AE) · Effective Date: January 2025
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-xs sm:text-sm text-slate-600 leading-relaxed space-y-8">
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
            <p className="text-xs text-slate-700 leading-relaxed">
              At DMC Immigration Consultants, your trust and privacy are paramount. We strictly handle your personal documentation and assessment records in accordance with UAE Federal Decree-Law No. 45 of 2021 regarding Personal Data Protection (PDPL) and international privacy principles.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-slate-900 mb-2">1. Scope of Information Collected</h2>
            <p className="mb-2">
              When you submit a consultation request, self-assessment score, or contract with us for professional migration representation, we may collect:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Full legal names, nationality, country of residence, and contact information (phone, WhatsApp, email).</li>
              <li>Educational records, university degrees, academic transcripts, and professional qualifications.</li>
              <li>Employment verification records, CVs, job titles, and verifiable career history.</li>
              <li>Official language proficiency benchmarks (IELTS, CELPIP, PTE, TOEFL).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-bold text-slate-900 mb-2">2. Purpose of Data Processing</h2>
            <p className="mb-2">Your data is utilized exclusively for:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Conducting preliminary eligibility assessments against statutory immigration criteria.</li>
              <li>Scheduling in-person appointments at our Latifa Tower Dubai office or remote video calls.</li>
              <li>Drafting and preparing agreed legal submissions with regulated counsel.</li>
              <li>Providing statutory application updates and regulatory milestones.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-base font-bold text-slate-900 mb-2">3. Non-Disclosure & Third-Party Protections</h2>
            <p>
              DMC Immigration Consultants does not sell, rent, or monetize client personal data to third-party marketing brokers. Data is transmitted only to statutory bodies (such as educational credential evaluators, foreign immigration departments, or authorized legal affiliates) strictly within the agreed client representation agreement.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-slate-900 mb-2">4. Data Security & Storage</h2>
            <p>
              We implement industry-standard encryption, role-based access restrictions, and secure digital storage protocols to safeguard your case dossiers against unauthorized access, loss, or alteration.
            </p>
          </div>

          <div>
            <h2 className="text-base font-bold text-slate-900 mb-2">5. Client Rights & Inquiries</h2>
            <p className="mb-3">
              You maintain the right to review, update, or request the deletion of your personal records held on file, subject to legal record-keeping requirements for submitted immigration cases.
            </p>
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-4">
              <div>
                <div className="font-semibold text-slate-900 text-xs">Data Protection Officer:</div>
                <div className="text-xs text-slate-500">{DMC_COMPANY_INFO.email} · {DMC_COMPANY_INFO.phoneDisplay}</div>
              </div>
              <a
                href={`mailto:${DMC_COMPANY_INFO.email}`}
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#14532D] text-white hover:bg-[#16A34A]"
              >
                Contact Privacy Desk
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
