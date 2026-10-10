/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId, ServiceItem, DestinationItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { PointsCalculatorModal } from './components/PointsCalculatorModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { DestinationDetailModal } from './components/DestinationDetailModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { DestinationsPage } from './pages/DestinationsPage';
import { WhyChooseUsPage } from './pages/WhyChooseUsPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { MessageSquare, Calculator } from 'lucide-react';
import { DMC_COMPANY_INFO } from './data/immigrationData';

export default function App() {
  // Page Routing with URL hash synchronization for deep linking & history navigation
  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    const hash = window.location.hash.replace('#/', '').replace('#', '') as PageId;
    const validPages: PageId[] = [
      'home',
      'about',
      'services',
      'destinations',
      'why-us',
      'contact',
      'privacy',
    ];
    return validPages.includes(hash) ? hash : 'home';
  });

  // Modal States
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [consultationTargetDest, setConsultationTargetDest] = useState<string>('');
  const [consultationTargetServ, setConsultationTargetServ] = useState<string>('');
  const [pointsCalcOpen, setPointsCalcOpen] = useState(false);
  const [inspectedService, setInspectedService] = useState<ServiceItem | null>(null);
  const [inspectedDestination, setInspectedDestination] = useState<DestinationItem | null>(null);

  // Sync hash with browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'about',
        'services',
        'destinations',
        'why-us',
        'contact',
        'privacy',
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (destination?: string, service?: string) => {
    setConsultationTargetDest(destination || '');
    setConsultationTargetServ(service || '');
    setConsultationOpen(true);
  };

  const handlePointsScoreConsultation = (system: string, score: number) => {
    setConsultationTargetDest(system.includes('Canada') ? 'Canada' : 'Australia');
    setConsultationTargetServ(
      `Skilled Migration (${system} Estimated Score: ${score})`
    );
    setConsultationOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] text-[#1e293b] selection:bg-emerald-100 selection:text-emerald-950">
      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Main Content Area with Motion Page Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {currentPage === 'home' && (
              <HomePage
                onNavigate={navigateTo}
                onOpenConsultation={handleOpenConsultation}
                onOpenPointsCalculator={() => setPointsCalcOpen(true)}
                onSelectService={(serv) => setInspectedService(serv)}
                onSelectDestination={(dest) => setInspectedDestination(dest)}
              />
            )}

            {currentPage === 'about' && (
              <AboutPage
                onNavigate={navigateTo}
                onOpenConsultation={() => handleOpenConsultation()}
              />
            )}

            {currentPage === 'services' && (
              <ServicesPage
                onNavigate={navigateTo}
                onOpenConsultation={handleOpenConsultation}
                onSelectService={(serv) => setInspectedService(serv)}
              />
            )}

            {currentPage === 'destinations' && (
              <DestinationsPage
                onNavigate={navigateTo}
                onOpenConsultation={(dest) => handleOpenConsultation(dest)}
                onSelectDestination={(dest) => setInspectedDestination(dest)}
                onOpenPointsCalculator={() => setPointsCalcOpen(true)}
              />
            )}

            {currentPage === 'why-us' && (
              <WhyChooseUsPage
                onNavigate={navigateTo}
                onOpenConsultation={() => handleOpenConsultation()}
                onOpenPointsCalculator={() => setPointsCalcOpen(true)}
              />
            )}

            {currentPage === 'contact' && (
              <ContactPage onNavigate={navigateTo} />
            )}

            {currentPage === 'privacy' && (
              <PrivacyPolicyPage onNavigate={navigateTo} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Corporate Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Modals & Dialogs */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        preselectedDestination={consultationTargetDest}
        preselectedService={consultationTargetServ}
      />

      <PointsCalculatorModal
        isOpen={pointsCalcOpen}
        onClose={() => setPointsCalcOpen(false)}
        onOpenConsultationWithScore={handlePointsScoreConsultation}
      />

      <ServiceDetailModal
        service={inspectedService}
        onClose={() => setInspectedService(null)}
        onBookConsultation={(serviceName) => handleOpenConsultation(undefined, serviceName)}
      />

      <DestinationDetailModal
        destination={inspectedDestination}
        onClose={() => setInspectedDestination(null)}
        onBookConsultation={(destName) => handleOpenConsultation(destName)}
      />

      {/* Persistent Quick Action Badges (Bottom Corner) */}
      <aside aria-label="Quick Actions" className="fixed bottom-6 right-6 z-40 flex flex-col gap-2.5 items-end">
        <button
          onClick={() => setPointsCalcOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-white text-slate-800 hover:text-[#14532D] shadow-lg border border-slate-200 text-xs font-semibold transition-all transform hover:-translate-y-0.5"
          title="Calculate Your Points"
        >
          <Calculator className="w-4 h-4 text-[#16A34A]" />
          <span className="hidden sm:inline">Points Calculator</span>
        </button>

        <a
          href={`https://wa.me/${DMC_COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
            'Hello DMC Immigration Consultants, I would like to enquire about visa pathways from Dubai.'
          )}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-[#16A34A] hover:bg-[#22C55E] text-white shadow-xl text-xs font-bold transition-all transform hover:scale-105"
          title="Direct WhatsApp with DMC Dubai"
        >
          <MessageSquare className="w-4 h-4 fill-white text-white" />
          <span>Chat on WhatsApp</span>
        </a>
      </aside>
    </div>
  );
}
