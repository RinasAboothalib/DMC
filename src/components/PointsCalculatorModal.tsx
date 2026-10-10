import React, { useState } from 'react';
import { X, Calculator, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

interface PointsCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultationWithScore: (system: string, score: number) => void;
}

export const PointsCalculatorModal: React.FC<PointsCalculatorModalProps> = ({
  isOpen,
  onClose,
  onOpenConsultationWithScore,
}) => {
  const [country, setCountry] = useState<'canada' | 'australia'>('canada');

  // Parameters
  const [age, setAge] = useState<string>('28');
  const [education, setEducation] = useState<string>('master');
  const [experience, setExperience] = useState<string>('3-plus');
  const [languageLevel, setLanguageLevel] = useState<string>('clb9'); // CLB 9+ / Superior
  const [spouseAccompanying, setSpouseAccompanying] = useState<boolean>(false);

  if (!isOpen) return null;

  // Calculate points
  const calculateScore = () => {
    if (country === 'canada') {
      // Approximate CRS Score Breakdown
      let total = 0;
      // Age (ideal 20-29 is ~100-110 points)
      const ageNum = parseInt(age, 10);
      if (ageNum >= 20 && ageNum <= 29) total += 110;
      else if (ageNum >= 30 && ageNum <= 34) total += 95;
      else if (ageNum >= 35 && ageNum <= 39) total += 70;
      else if (ageNum >= 40 && ageNum <= 44) total += 45;
      else total += 20;

      // Education
      if (education === 'phd') total += 150;
      else if (education === 'master') total += 135;
      else if (education === 'dual') total += 128;
      else if (education === 'bachelor') total += 120;
      else total += 90;

      // Language
      if (languageLevel === 'clb9') total += 136; // CLB 9
      else if (languageLevel === 'clb8') total += 115;
      else total += 90;

      // Experience & Skill Transferability
      if (experience === '3-plus') total += 75;
      else if (experience === '2') total += 50;
      else total += 25;

      return Math.min(total, 600); // core points without PNP
    } else {
      // Australia GSM Points (Min pass: 65)
      let total = 0;
      const ageNum = parseInt(age, 10);
      if (ageNum >= 25 && ageNum <= 32) total += 30;
      else if (ageNum >= 18 && ageNum <= 24) total += 25;
      else if (ageNum >= 33 && ageNum <= 39) total += 25;
      else if (ageNum >= 40 && ageNum <= 44) total += 15;

      // English
      if (languageLevel === 'clb9') total += 20; // Superior English (IELTS 8 / PTE 79)
      else if (languageLevel === 'clb8') total += 10; // Proficient (IELTS 7 / PTE 65)

      // Education
      if (education === 'phd') total += 20;
      else if (education === 'master' || education === 'bachelor') total += 15;
      else total += 10;

      // Experience
      if (experience === '3-plus') total += 10;
      else if (experience === '2') total += 5;

      // Single / skilled partner
      if (!spouseAccompanying) total += 10; // Single bonus
      else total += 5;

      return total;
    }
  };

  const score = calculateScore();
  const isCompetitive = country === 'canada' ? score >= 480 : score >= 65;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#16A34A] uppercase tracking-wider mb-2">
            <Calculator className="w-4 h-4" />
            <span>Self-Assessment Simulator</span>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
            Points & Eligibility Audit
          </h2>
          <p className="text-xs text-slate-600 mt-1 mb-6">
            Estimate your preliminary points for statutory skilled migration pathways.
          </p>

          {/* Program Toggle */}
          <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-2xl mb-6">
            <button
              onClick={() => setCountry('canada')}
              className={`py-2 text-xs font-semibold rounded-xl transition-all ${
                country === 'canada'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Canada (Express Entry CRS)
            </button>
            <button
              onClick={() => setCountry('australia')}
              className={`py-2 text-xs font-semibold rounded-xl transition-all ${
                country === 'australia'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Australia (GSM 65+ Points)
            </button>
          </div>

          {/* Parameters Form */}
          <div className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Your Current Age: {age} years
              </label>
              <input
                type="range"
                min="20"
                max="50"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full accent-[#16A34A]"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>20 yrs</span>
                <span>30 yrs (Peak)</span>
                <span>50 yrs</span>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Highest Formal Educational Credential
              </label>
              <select
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 bg-white"
              >
                <option value="phd">Doctoral / Ph.D. Degree</option>
                <option value="master">Master’s Degree or Professional Degree</option>
                <option value="dual">Two or More Post-Secondary Diplomas</option>
                <option value="bachelor">Bachelor’s Degree (3–4 years)</option>
                <option value="diploma">Post-Secondary Diploma (1–2 years)</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Verifiable Work Experience
                </label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 bg-white"
                >
                  <option value="3-plus">3+ Years Continuous</option>
                  <option value="2">2 Years</option>
                  <option value="1">1 Year</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Language Proficiency
                </label>
                <select
                  value={languageLevel}
                  onChange={(e) => setLanguageLevel(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-slate-800 bg-white"
                >
                  <option value="clb9">CLB 9+ (IELTS 8+ / PTE 79+)</option>
                  <option value="clb8">CLB 8 (IELTS 7.5 / PTE 65+)</option>
                  <option value="clb7">CLB 7 (IELTS 6.0 / Competent)</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="spouseCalc"
                checked={spouseAccompanying}
                onChange={(e) => setSpouseAccompanying(e.target.checked)}
                className="rounded text-[#16A34A] focus:ring-[#16A34A] h-4 w-4"
              />
              <label htmlFor="spouseCalc" className="text-slate-600">
                Applying with an accompanying spouse or partner
              </label>
            </div>
          </div>

          {/* Result Card */}
          <div className="mt-6 p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-semibold text-[#14532D] uppercase tracking-wider block">
                Estimated {country === 'canada' ? 'CRS Score' : 'SkillSelect Points'}
              </span>
              <div className="flex items-baseline gap-2 mt-0.5">
                <span className="text-3xl font-extrabold text-[#14532D] tabular-nums">
                  {score}
                </span>
                <span className="text-xs text-slate-500">
                  {country === 'canada' ? '/ 600 base' : 'points (65 pass benchmark)'}
                </span>
              </div>
            </div>

            <div className="text-right">
              {isCompetitive ? (
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-white px-2.5 py-1 rounded-lg border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                  <span>Viable Profile</span>
                </div>
              ) : (
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 bg-white px-2.5 py-1 rounded-lg border border-amber-200">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                  <span>PNP / Strategy Needed</span>
                </div>
              )}
            </div>
          </div>

          <p className="text-[11px] text-slate-500 mt-2">
            *This is an indicative estimate. Provincial nominations (PNPs in Canada add +600 points) and state endorsements (Australia add 5–15 points) can substantially enhance your standing.
          </p>

          {/* Action button */}
          <div className="mt-6 flex gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenConsultationWithScore(country === 'canada' ? 'Canada Express Entry' : 'Australia GSM', score);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs text-white bg-[#14532D] hover:bg-[#16A34A] transition-colors"
            >
              <span>Discuss This Score with DMC Consultant</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
