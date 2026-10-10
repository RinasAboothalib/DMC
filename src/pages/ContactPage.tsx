import React, { useState } from 'react';
import { PageId, ConsultationFormData } from '../types';
import { DMC_COMPANY_INFO } from '../data/immigrationData';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Loader2,
  Navigation,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    currentCountry: 'United Arab Emirates',
    intendedDestination: 'Canada',
    serviceOfInterest: 'Skilled Migration',
    preferredContactMethod: 'whatsapp',
    message: '',
    consent: true,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
      errs.consent = 'Consent is required to submit your enquiry.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
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
    }, 850);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello DMC Immigration Consultants Dubai! I would like to schedule an in-person consultation at your Latifa Tower office regarding ${formData.serviceOfInterest}.`
    );
    window.open(`https://wa.me/${DMC_COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="pt-24 pb-20">
      {/* Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              <span>Dubai Headquarters & Global Enquiries</span>
              <span aria-hidden="true">·</span>
              <span>Direct Connect</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
              Contact Our Consultants
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Visit our Latifa Tower office on Sheikh Zayed Road or connect remotely with our senior migration specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Col: Verified Office Details & Sheikh Zayed Road Map Card */}
            <div className="lg:col-span-5 space-y-6">
              {/* Contact Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-5">
                <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Dubai Executive Office
                </h2>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Headquarters Address</div>
                      <div className="text-slate-600 leading-relaxed mt-0.5">
                        {DMC_COMPANY_INFO.headquarters}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-1">
                        Landmark: Near World Trade Centre Metro Station, Sheikh Zayed Road
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Direct Telephone</div>
                      <a
                        href={`tel:${DMC_COMPANY_INFO.phone}`}
                        className="text-[#14532D] font-bold text-sm hover:underline mt-0.5 block"
                      >
                        {DMC_COMPANY_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">WhatsApp Advisory</div>
                      <a
                        href={`https://wa.me/${DMC_COMPANY_INFO.whatsapp}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-emerald-700 font-semibold hover:underline mt-0.5 block"
                      >
                        {DMC_COMPANY_INFO.whatsappDisplay} (Live Chat)
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Official Email</div>
                      <a
                        href={`mailto:${DMC_COMPANY_INFO.email}`}
                        className="text-slate-600 hover:text-slate-900 mt-0.5 block"
                      >
                        {DMC_COMPANY_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-slate-900">Consultation Hours</div>
                      <div className="text-slate-600 mt-0.5">
                        {DMC_COMPANY_INFO.businessHours}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Sunday: Closed for case review & filings
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold text-white bg-[#15803D] hover:bg-[#16A34A] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open Direct WhatsApp Chat</span>
                  </button>
                </div>
              </div>

              {/* Map & Landmark Card */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-md">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                    <Navigation className="w-4 h-4" />
                    <span>Location Navigation</span>
                  </div>
                  <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                    Latifa Tower · 36th Floor
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Latifa Tower is located on Sheikh Zayed Road between the World Trade Centre and Emirates Towers Metro stations, with dedicated visitor valet and underground parking available.
                </p>
                <div className="h-36 rounded-2xl bg-slate-800 border border-slate-700 flex flex-col items-center justify-center text-center p-4">
                  <MapPin className="w-6 h-6 text-[#22C55E] mb-2" />
                  <div className="text-xs font-bold text-white">Office 3604, Latifa Tower</div>
                  <div className="text-[11px] text-slate-400">Sheikh Zayed Road, Dubai, UAE</div>
                </div>
              </div>
            </div>

            {/* Right Col: Consultation & Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs">
                {isSuccess ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 bg-emerald-50 text-[#16A34A] rounded-2xl flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      Enquiry Lodged Successfully
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-6">
                      Thank you for contacting DMC Immigration Consultants. A case advisor from our Dubai office will review your request and contact you within 24 business hours.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-5 py-2.5 text-xs font-semibold text-[#14532D] bg-emerald-50 hover:bg-emerald-100 rounded-xl"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                        Schedule Your Case Assessment
                      </h2>
                      <p className="text-xs text-slate-600 mt-1">
                        Fill in your details to receive an initial eligibility breakdown from our team.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="Your legal name"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
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
                            placeholder="name@example.com"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                          />
                          {errors.email && (
                            <p className="text-red-600 text-xs mt-1">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Phone / WhatsApp *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+971 50 123 4567"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                          />
                          {errors.phone && (
                            <p className="text-red-600 text-xs mt-1">{errors.phone}</p>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Current Residence
                          </label>
                          <input
                            type="text"
                            value={formData.currentCountry}
                            onChange={(e) => setFormData({ ...formData, currentCountry: e.target.value })}
                            placeholder="e.g. UAE, Saudi Arabia, Qatar"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Intended Destination
                          </label>
                          <select
                            value={formData.intendedDestination}
                            onChange={(e) => setFormData({ ...formData, intendedDestination: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#16A34A] bg-white"
                          >
                            <option value="Canada">Canada (Express Entry / PNP)</option>
                            <option value="Australia">Australia (SkillSelect)</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="European Union">Europe (Golden Visa / Blue Card)</option>
                            <option value="Undecided">Undecided / Open</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Service Category
                          </label>
                          <select
                            value={formData.serviceOfInterest}
                            onChange={(e) => setFormData({ ...formData, serviceOfInterest: e.target.value })}
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#16A34A] bg-white"
                          >
                            <option value="Skilled Migration">Skilled Migration & PR</option>
                            <option value="Business & Investment Visas">Business & Investment Visas</option>
                            <option value="Employer-Sponsored Work Visas">Employer-Sponsored Visas</option>
                            <option value="Student Visas">Student Visas</option>
                            <option value="Family Sponsorship">Family & Spousal</option>
                            <option value="Overseas Business & Resettlement">Business Setup & Relocation</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Brief Message / Experience Outline
                        </label>
                        <textarea
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Please describe your highest education, years of experience, and whether you prefer an in-person meeting in Latifa Tower or a video consultation."
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                        />
                      </div>

                      <div className="flex items-start gap-2 pt-1">
                        <input
                          type="checkbox"
                          id="contactConsent"
                          checked={formData.consent}
                          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                          className="mt-0.5 rounded text-[#16A34A] focus:ring-[#16A34A] h-4 w-4"
                        />
                        <label htmlFor="contactConsent" className="text-[11px] text-slate-500 leading-tight">
                          I consent to DMC Immigration Consultants contacting me in regards to this immigration query. Your details remain confidential and protected under UAE data privacy standards.
                        </label>
                      </div>
                      {errors.consent && (
                        <p className="text-red-600 text-xs">{errors.consent}</p>
                      )}

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-[#14532D] hover:bg-[#16A34A] transition-all shadow-xs disabled:opacity-60"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Sending Enquiry...</span>
                            </>
                          ) : (
                            <>
                              <span>Submit Consultation Request</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>

                      <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 pt-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
                        <span>Private consultation · Strict confidentiality assured</span>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
