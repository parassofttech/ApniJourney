import React from "react";
import {
  FileText,
  Shield,
  AlertTriangle,
  Scale,
  Mail,
  CheckCircle2,
  PlaneTakeoff,
  Image as ImageIcon,
  UserX,
  RefreshCw,
  Globe,
  ArrowUpRight
} from "lucide-react";

const TermsAndConditions = () => {
  // Anchors for sidebar matching content ids
  const termsIndex = [
    { id: "acceptance", label: "1. Acceptance of Terms" },
    { id: "responsibilities", label: "2. User Obligations" },
    { id: "travel-bookings", label: "3. Booking & Schedules" },
    { id: "user-content", label: "4. Digital Assets & Media" },
    { id: "prohibited", label: "5. Restricted Conduct" },
    { id: "liability", label: "6. Scope of Liability" },
    { id: "termination", label: "7. Account Revocation" },
    { id: "changes", label: "8. Framework Updates" },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 py-20 px-4 md:px-8 selection:bg-blue-500/10 font-sans relative">
      
      {/* Decorative Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-70" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ================= COMPONENT HEADER HERO ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200/60 text-blue-600 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm">
            <Scale size={12} className="animate-pulse" />
            <span>Legal Framework</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
            Terms &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Conditions
            </span>
          </h1>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Please read these foundational service terms carefully before operating our travel orchestration suites.
          </p>
        </div>

        {/* ================= MAIN CONTENT SPLIT ARRAYS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: NAVIGATION ANCHOR BAR (Desktop Only) */}
          <nav className="lg:col-span-4 sticky top-10 hidden lg:block bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm shadow-slate-100/50 backdrop-blur-md">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 px-3">Agreement Index</h3>
            <ul className="space-y-1">
              {termsIndex.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    className="flex items-center justify-between text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-xl px-3 py-2.5 transition-all duration-200 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT COLUMN: CORE POLICY CARD STACKS */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. Acceptance */}
            <section id="acceptance" className="bg-white border border-slate-200/80 shadow-sm rounded-3xl p-8 scroll-mt-6 hover:border-slate-300 transition-colors">
              <h2 className="flex items-center gap-3 text-xl md:text-2xl font-black text-slate-900 mb-4">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100"><CheckCircle2 size={18} /></div>
                1. Acceptance of Terms
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                By accessing, browsing, or routing queries via our platform, you confirm your absolute compliance with these binding Terms and Conditions. If you mismatch or disagree with any operational clause stated herein, kindly terminate your active user portal immediately.
              </p>
            </section>

            {/* 2. User Responsibilities */}
            <section id="responsibilities" className="bg-white border border-slate-200/80 shadow-sm rounded-3xl p-8 scroll-mt-6 hover:border-slate-300 transition-colors">
              <h2 className="flex items-center gap-3 text-xl md:text-2xl font-black text-slate-900 mb-6">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100"><Shield size={18} /></div>
                2. User Obligations & Safety
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Provide structurally authentic & true records.",
                  "Enforce absolute terminal credential safety.",
                  "Utilize infrastructure solely for lawful trips.",
                  "Refrain from scraping or system payload testing.",
                  "Respect intellectual privacy parameters of others."
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 border border-slate-100 rounded-xl text-xs md:text-sm font-semibold text-slate-600 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Travel Information */}
            <section id="travel-bookings" className="bg-white border border-slate-200/80 shadow-sm rounded-3xl p-8 scroll-mt-6 hover:border-slate-300 transition-colors">
              <h2 className="flex items-center gap-3 text-xl md:text-2xl font-black text-slate-900 mb-4">
                <div className="w-9 h-9 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-100"><PlaneTakeoff size={18} /></div>
                3. Travel Information & Bookings
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                Pricing scales, available itineraries, global routes, and tracking indexes listed on ApniJourney remain highly dynamic and subject to alteration without notification. Users carry the absolute liability to cross-verify structural regional rules, immigration logs, and entry visas before confirming data locks.
              </p>
            </section>

            {/* 4. User Content */}
            <section id="user-content" className="bg-white border border-slate-200/80 shadow-sm rounded-3xl p-8 scroll-mt-6 hover:border-slate-300 transition-colors">
              <h2 className="flex items-center gap-3 text-xl md:text-2xl font-black text-slate-900 mb-4">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100"><ImageIcon size={18} /></div>
                4. Digital Assets & Media Releases
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                By uploading digital travel gallery logs, trip reviews, geotags, or operational logs, you grant our system an international, royalty-free permit to cache and stream this dataset for global application visibility. Original creators preserve full platform ownership nodes.
              </p>
            </section>

            {/* 5. Prohibited Activities */}
            <section id="prohibited" className="bg-white border border-slate-200/80 shadow-sm rounded-3xl p-8 scroll-mt-6 hover:border-slate-300 transition-colors">
              <h2 className="flex items-center gap-3 text-xl md:text-2xl font-black text-slate-900 mb-6">
                <div className="w-9 h-9 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100"><AlertTriangle size={18} /></div>
                5. Restricted Conduct Matrices
              </h2>
              <div className="space-y-3">
                {[
                  "Injecting destructive software extensions, scripts, or malicious bugs.",
                  "Engineering mock accounts to breach database endpoints.",
                  "Spamming distribution channels or hijacking local portal threads.",
                  "Violating copyright licenses or structural branding systems.",
                  "Triggering high traffic counts to create artificial downtime spikes."
                ].map((text, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-red-50/40 border border-red-100/60 rounded-xl text-xs md:text-sm font-medium text-slate-700">
                    <span className="text-xs font-mono font-bold text-red-500 mt-0.5">![0{index + 1}]</span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Liability */}
            <section id="liability" className="bg-white border border-slate-200/80 shadow-sm rounded-3xl p-8 scroll-mt-6 hover:border-slate-300 transition-colors">
              <h2 className="flex items-center gap-3 text-xl md:text-2xl font-black text-slate-900 mb-4">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100"><Scale size={18} /></div>
                6. Limitations of System Liability
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                ApniJourney is not accountable for direct, random, collateral, or circumstantial network errors arising out of software usage. This references unexpected travel scheduling disruptions, local terminal connectivity errors, or storage network data drops.
              </p>
            </section>

            {/* 7. Termination */}
            <section id="termination" className="bg-white border border-slate-200/80 shadow-sm rounded-3xl p-8 scroll-mt-6 hover:border-slate-300 transition-colors">
              <h2 className="flex items-center gap-3 text-xl md:text-2xl font-black text-slate-900 mb-4">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100"><UserX size={18} /></div>
                7. Account Revocation Protocols
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                We preserve an autonomous right to hold, freeze, or terminate terminal memberships if user systems bypass our safety boundaries, entirely without prior warning signals.
              </p>
            </section>

            {/* 8. Changes to Terms */}
            <section id="changes" className="bg-white border border-slate-200/80 shadow-sm rounded-3xl p-8 scroll-mt-6 hover:border-slate-300 transition-colors">
              <h2 className="flex items-center gap-3 text-xl md:text-2xl font-black text-slate-900 mb-4">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100"><RefreshCw size={18} /></div>
                8. Framework Updates
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                Legal terms evolve over time. Operating your portal post-deployment of structural modifications automatically maps your explicit consent to the updated framework agreements.
              </p>
            </section>

            {/* ================= COMPONENT FOOTER CONTACT CHANNEL ================= */}
            <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-[2rem] p-8 shadow-xl shadow-blue-900/10 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/10 blur-[90px] rounded-full pointer-events-none" />
              
              <h2 className="flex items-center gap-3 text-xl md:text-2xl font-black mb-4">
                <Mail size={22} className="text-cyan-300" />
                Contact Arbitration Helpdesk
              </h2>
              <p className="text-blue-100 text-sm md:text-base mb-6 font-medium max-w-xl">
                Have specific queries regarding enterprise travel compliance, brand protection policies, or user licensing nodes? Get in touch straight away.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm font-bold bg-black/10 border border-white/10 p-4 rounded-2xl backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-cyan-300 shrink-0" />
                  <span className="text-slate-200">Email:</span>
                  <a href="mailto:support@apnijourney.com" className="text-white hover:underline">apnijourney@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-cyan-300 shrink-0" />
                  <span className="text-slate-200">Portal:</span>
                  <a href="https://www.apnijourney.com" target="_blank" rel="noreferrer" className="text-white hover:underline">apnijourney.com</a>
                </div>
              </div>
            </section>

            {/* TIMESTAMP */}
            <div className="text-center text-xs text-slate-400 font-semibold pt-4">
              Contract Identification Key: AJ-TNC-2026 • Last Updated: June 2026
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default TermsAndConditions;