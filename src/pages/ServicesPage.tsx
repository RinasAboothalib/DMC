import React, { useState } from 'react';
import { PageId, ServiceItem } from '../types';
import { SERVICES_DATA } from '../data/immigrationData';
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Compass,
  ShieldCheck,
  Search,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenConsultation: (preselectedDest?: string, preselectedServ?: string) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenConsultation,
  onSelectService,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory =
      activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.whoIsItFor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-20">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              <span>Verified Immigration Services</span>
              <span aria-hidden="true">·</span>
              <span>Expert Guidance</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
              Immigration & Relocation Solutions
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore our core pathways for professionals, business founders, students, and corporate groups seeking residency in Canada, Australia, the UK, Europe, and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-2xl w-full md:w-auto">
              {[
                { id: 'all', label: 'All Services' },
                { id: 'skilled', label: 'Skilled Migration' },
                { id: 'business', label: 'Business & Investor' },
                { id: 'employer', label: 'Employer-Sponsored' },
                { id: 'student', label: 'Student Visas' },
                { id: 'family', label: 'Family Class' },
                { id: 'resettlement', label: 'Resettlement' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                    activeCategory === cat.id
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Search input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services or skills..."
                className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#16A34A] bg-white text-slate-900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
              <Compass className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <h3 className="text-base font-bold text-slate-900">No matching services found</h3>
              <p className="text-xs text-slate-500 mt-1 mb-4">
                Try modifying your search or select "All Services" to view the complete catalog.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-emerald-50 text-[#14532D]"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-bold text-[#14532D] bg-emerald-50 px-2.5 py-0.5 rounded-lg uppercase tracking-wide">
                        {service.category}
                      </span>
                      {service.badgeText && (
                        <span className="text-[11px] font-semibold text-[#16A34A]">
                          {service.badgeText}
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#14532D] transition-colors mb-2">
                      {service.name}
                    </h2>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>

                    <div className="bg-slate-50 rounded-2xl p-3.5 mb-5 border border-slate-100">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                        Suitable Profile:
                      </div>
                      <div className="text-xs text-slate-700 leading-snug line-clamp-2">
                        {service.whoIsItFor}
                      </div>
                    </div>

                    <div className="space-y-1.5 mb-6 text-xs text-slate-600">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                        Service Deliverables:
                      </div>
                      {service.processOverview.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0 mt-0.5" />
                          <span className="text-[11px] text-slate-600 leading-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectService(service)}
                      className="text-xs font-bold text-[#14532D] hover:text-[#16A34A] transition-colors inline-flex items-center gap-1"
                    >
                      <span>Full Roadmap</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onOpenConsultation(undefined, service.name)}
                      className="px-3.5 py-2 text-xs font-bold rounded-xl bg-[#14532D] hover:bg-[#16A34A] text-white transition-all shadow-xs"
                    >
                      Discuss Case
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Legal statement */}
          <div className="mt-12 p-5 rounded-2xl bg-white border border-slate-200 max-w-4xl mx-auto flex items-start gap-3.5 text-xs text-slate-600">
            <ShieldCheck className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="text-slate-900">Regulatory Scope Notice:</strong> DMC Immigration Consultants provides professional assessment, documentation assistance, and statutory liaison. We operate strictly in accordance with statutory guidelines and partner with registered legal representatives (e.g. CICC for Canada, MARA for Australia). All visa grant determinations remain the exclusive authority of government visa bodies.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
