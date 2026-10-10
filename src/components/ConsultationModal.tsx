import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, MessageSquare, ShieldCheck, Loader2 } from 'lucide-react';
import { ConsultationFormData } from '../types';
import { DMC_COMPANY_INFO } from '../data/immigrationData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedDestination?: string;
  preselectedService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  preselectedDestination = '',
  preselectedService = '',
}) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    currentCountry: 'United Arab Emirates',
    intendedDestination: preselectedDestination || 'Canada',
    serviceOfInterest: preselectedService || 'Skilled Migration',
    preferredContactMethod: 'whatsapp',
    message: '',
    consent: true,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ConsultationFormData, string>> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      errs.fullName = 'Please enter your full legal name.';
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      errs.phone = 'Please provide a valid phone or WhatsApp number.';
    }
    if (!formData.consent) {
      errs.consent = 'Consent is required to process your enquiry.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real backend processing & local persist
    setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem('dmc_consultations') || '[]');
        stored.push({ ...formData, submittedAt: new Date().toISOString() });
        localStorage.setItem('dmc_consultations', JSON.stringify(stored));
      } catch {
        // Safe fallback
      }
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 900);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello DMC Immigration Consultants, my name is ${formData.fullName || 'a prospective client'}. I would like to schedule a consultation regarding ${formData.serviceOfInterest} for ${formData.intendedDestination}.`
    );
    window.open(`https://wa.me/${DMC_COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-modal-title"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2 text-slate-400 hover:text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="p-8 sm:p-12 text-center">
            <div className="w-16 h-16 bg-emerald-50 text-[#16A34A] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Consultation Request Received
            </h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
              Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. A senior migration consultant from our Dubai office will review your profile and reach out via {formData.preferredContactMethod.toUpperCase()} within 24 business hours.
            </p>

            <div className="bg-slate-50 rounded-2xl p-4 mb-8 text-left border border-slate-100 max-w-md mx-auto text-xs text-slate-600 space-y-1.5">
              <div className="flex justify-between">
                <span className="text-slate-500">Intended Destination:</span>
                <span className="font-semibold text-slate-900">{formData.intendedDestination}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Service:</span>
                <span className="font-semibold text-slate-900">{formData.serviceOfInterest}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Contact Number:</span>
                <span className="font-semibold text-slate-900">{formData.phone}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleWhatsAppDirect}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-[#15803D] hover:bg-[#16A34A] rounded-xl transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp</span>
              </button>
              <button
                onClick={onClose}
                className="px-5 py-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-10">
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#16A34A] mb-2 uppercase tracking-wider">
                <span>DMC Dubai Office</span>
                <span aria-hidden="true">·</span>
                <span>Confidential Assessment</span>
              </div>
              <h2
                id="consultation-modal-title"
                className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight"
              >
                Let’s Explore Your Next Opportunity.
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                Tell us about your goals and connect with our team to discuss the options relevant to your circumstances.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Tariq Al-Mansoor"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16A34A] ${
                      errors.fullName ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-red-600 text-xs mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. tariq@domain.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16A34A] ${
                      errors.email ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +971 50 123 4567"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16A34A] ${
                      errors.phone ? 'border-red-400 bg-red-50/30' : 'border-slate-200'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-600 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Current Country of Residence
                  </label>
                  <input
                    type="text"
                    value={formData.currentCountry}
                    onChange={(e) => setFormData({ ...formData, currentCountry: e.target.value })}
                    placeholder="e.g. United Arab Emirates"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Target Destination
                  </label>
                  <select
                    value={formData.intendedDestination}
                    onChange={(e) => setFormData({ ...formData, intendedDestination: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#16A34A] bg-white"
                  >
                    <option value="Canada">Canada (Express Entry / PNP / Start-Up)</option>
                    <option value="Australia">Australia (SkillSelect 189/190/491)</option>
                    <option value="United Kingdom">United Kingdom (Skilled Worker / Innovator)</option>
                    <option value="New Zealand">New Zealand (Skilled Migrant / Green List)</option>
                    <option value="Europe / Golden Visa">Europe (Portugal / Greece / Blue Card)</option>
                    <option value="Undecided">Undecided / Open to Advice</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Service of Interest
                  </label>
                  <select
                    value={formData.serviceOfInterest}
                    onChange={(e) => setFormData({ ...formData, serviceOfInterest: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#16A34A] bg-white"
                  >
                    <option value="Skilled Migration">Skilled Migration & PR</option>
                    <option value="Business & Investor Visas">Business & Investment Visas</option>
                    <option value="Employer-Sponsored Work Visas">Employer-Sponsored Visas</option>
                    <option value="Student Visas">Student Visas & Post-Study</option>
                    <option value="Family Sponsorship">Family & Spousal Sponsorship</option>
                    <option value="Overseas Business & Resettlement">Overseas Business & Resettlement</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Preferred Contact Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['whatsapp', 'phone', 'email'] as const).map((method) => (
                    <button
                      type="button"
                      key={method}
                      onClick={() => setFormData({ ...formData, preferredContactMethod: method })}
                      className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-colors capitalize ${
                        formData.preferredContactMethod === method
                          ? 'border-[#16A34A] bg-emerald-50 text-[#14532D]'
                          : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Brief Summary of Goals & Experience (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. 6 years experience in software engineering, bachelor degree, interested in Canadian PR timeline."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                />
              </div>

              {/* Consent checkbox */}
              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-0.5 rounded text-[#16A34A] focus:ring-[#16A34A] h-4 w-4"
                />
                <label htmlFor="consent" className="text-xs text-slate-500 leading-tight">
                  I consent to DMC Immigration Consultants contacting me regarding immigration advisory. DMC respects client privacy and never shares details with third parties.
                </label>
              </div>
              {errors.consent && (
                <p className="text-red-600 text-xs">{errors.consent}</p>
              )}

              {/* Submit CTA & Trust Indicator */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm text-white bg-[#14532D] hover:bg-[#16A34A] active:bg-[#0f3e21] shadow-xs transition-all duration-200 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Reviewing profile...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Consultation Enquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
                <span>Zero false guarantees · Transparent guidance · Latifa Tower, Sheikh Zayed Road</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
