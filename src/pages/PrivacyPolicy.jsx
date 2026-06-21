import React from "react";
import { 
  Shield, 
  Lock, 
  Database, 
  Mail, 
  Eye, 
  Cookie, 
  Layers, 
  UserCheck, 
  RefreshCw, 
  Globe,
  ArrowUpRight
} from "lucide-react";

const PrivacyPolicy = () => {
  // Navigation array for quick jumping via anchors
  const quickLinks = [
    { id: "collect", label: "1. Information Collection" },
    { id: "use", label: "2. Data Utilization" },
    { id: "security", label: "3. Cryptographic Security" },
    { id: "cookies", label: "4. Tracking & Cookies" },
    { id: "third-party", label: "5. Third-Party Protocols" },
    { id: "rights", label: "6. Absolute User Rights" },
    { id: "changes", label: "7. Policy Modifications" },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 py-20 px-4 md:px-8 selection:bg-blue-500/10 font-sans">
      
      {/* Decorative Grid Mesh Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-70" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ================= COMPONENT HERO HEADER ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200/60 text-blue-600 rounded-full text-xs font-semibold uppercase tracking-wider shadow-sm">
            <Shield size={12} className="animate-pulse" />
            <span>Compliance Center</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
            Privacy{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Your data nodes are protected. Learn how ApniJourney processes, collects, and secures your workspace profiles.
          </p>
        </div>

        {/* ================= CONTENT CONTAINER ARRAYS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT PANEL: STICKY INDEX (Spans 4 Columns on desktop) */}
          <nav className="lg:col-span-4 sticky top-10 hidden lg:block bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm shadow-slate-100/50 backdrop-blur-md">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 px-3">Document Index</h3>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`}
                    className="flex items-center justify-between text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-slate-50 rounded-xl px-3 py-2.5 transition-all duration-200 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT PANEL: LEGAL TEXT DATA (Spans 8 Columns) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Section 1 */}
            <section id="collect" className="bg-white border border-slate-200/80 shadow-sm rounded-3xl p-8 scroll-mt-6 hover:border-slate-300 transition-colors">
              <h2 className="flex items-center gap-3 text-xl md:text-2xl font-black text-slate-900 mb-4">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100"><Eye size={18} /></div>
                1. Information We Collect
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                We may collect personal information such as your name, email address, travel preferences, booking details, uploaded trip photos, and other contextual datasets you voluntarily declare while routing transactions via our platform.
              </p>
            </section>

            {/* Section 2 */}
            <section id="use" className="bg-white border border-slate-200/80 shadow-sm rounded-3xl p-8 scroll-mt-6 hover:border-slate-300 transition-colors">
              <h2 className="flex items-center gap-3 text-xl md:text-2xl font-black text-slate-900 mb-6">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100"><Database size={18} /></div>
                2. How We Use Your Information
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "To provide and improve our travel systems.",
                  "To personalize core travel experience maps.",
                  "To manage global bookings and logs.",
                  "To communicate custom telemetry upgrades.",
                  "To block active fraud/exploit frameworks."
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 border border-slate-100 rounded-xl text-xs md:text-sm font-semibold text-slate-600 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 3 */}
            <section id="security" className="bg-white border border-slate-200/80 shadow-sm rounded-3xl p-8 scroll-mt-6 hover:border-slate-300 transition-colors">
              <h2 className="flex items-center gap-3 text-xl md:text-2xl font-black text-slate-900 mb-4">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100"><Lock size={18} /></div>
                3. Data Security
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                We implement industry-standard cryptographic layers and token hashing structures to shield your records. However, no platform online can pledge absolute vector immunity—users are requested to handle credentials safely.
              </p>
            </section>

            {/* Section 4 */}
            <section id="cookies" className="bg-white border border-slate-200/80 shadow-sm rounded-3xl p-8 scroll-mt-6 hover:border-slate-300 transition-colors">
              <h2 className="flex items-center gap-3 text-xl md:text-2xl font-black text-slate-900 mb-4">
                <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100"><Cookie size={18} /></div>
                4. Cookies & Tracking Systems
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                We use tracking matrices to monitor optimization speeds, session lengths, and user settings parameters. You have total authority to block local cookie injection cycles inside your web browser configuration panel.
              </p>
            </section>

            {/* Section 5 */}
            <section id="third-party" className="bg-white border border-slate-200/80 shadow-sm rounded-3xl p-8 scroll-mt-6 hover:border-slate-300 transition-colors">
              <h2 className="flex items-center gap-3 text-xl md:text-2xl font-black text-slate-900 mb-4">
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100"><Layers size={18} /></div>
                5. Third-Party Integrations
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                Our servers interface with premium microservices like verified payment vaults, real-time maps, and local weather APIs. These operations have separated legal terms governed by their autonomous privacy policies.
              </p>
            </section>

            {/* Section 6 */}
            <section id="rights" className="bg-white border border-slate-200/80 shadow-sm rounded-3xl p-8 scroll-mt-6 hover:border-slate-300 transition-colors">
              <h2 className="flex items-center gap-3 text-xl md:text-2xl font-black text-slate-900 mb-4">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100"><UserCheck size={18} /></div>
                6. Absolute User Rights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-semibold text-slate-600">
                {["Request core info data access.", "Correct outdated account profiles.", "Demand total system data erasure.", "Revoke explicit authorization tracking."].map((elem, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-xs text-indigo-500 font-mono">0{i+1}.</span>
                    <span>{elem}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 7 */}
            <section id="changes" className="bg-white border border-slate-200/80 shadow-sm rounded-3xl p-8 scroll-mt-6 hover:border-slate-300 transition-colors">
              <h2 className="flex items-center gap-3 text-xl md:text-2xl font-black text-slate-900 mb-4">
                <div className="w-9 h-9 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-100"><RefreshCw size={18} /></div>
                7. Changes To Documentation
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                ApniJourney maintains the ultimate mandate to revise this disclosure deck. Any live edits will instantly reflect on this endpoint along with an adjusted revision timestamp down below.
              </p>
            </section>

            {/* CONTACT CHANNEL CARD */}
            <section className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-[2rem] p-8 shadow-xl shadow-blue-900/10 relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white/10 blur-[90px] rounded-full pointer-events-none" />
              
              <h2 className="flex items-center gap-3 text-xl md:text-2xl font-black mb-4">
                <Mail size={22} className="text-cyan-300" />
                Contact Privacy Desk
              </h2>
              <p className="text-blue-100 text-sm md:text-base mb-6 font-medium max-w-xl">
                Have an inquiry concerning account storage metrics or automated database compliance guidelines? File a support ticket.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm font-bold bg-black/10 border border-white/10 p-4 rounded-2xl backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-cyan-300 shrink-0" />
                  <span className="text-slate-200">Email:</span>
                  <a href="mailto:apnijourneyin@gmail.com" className="text-white hover:underline">apnijourneyin@gmail.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-cyan-300 shrink-0" />
                  <span className="text-slate-200">Portal:</span>
                  <a href="https://apnijourney.com" target="_blank" rel="noreferrer" className="text-white hover:underline">apnijourney.com</a>
                </div>
              </div>
            </section>

            {/* TIMESTAMP */}
            <div className="text-center text-xs text-slate-400 font-semibold pt-4">
              Document Fingerprint Code: AJ-PRV-2026 • Last Updated: June 2026
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;