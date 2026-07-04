import React from 'react';
import {
    Globe2,
    Map,
    Wallet,
    Utensils,
    ShieldCheck,
    Plane,
    ArrowRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WhyChooseApnijourney = () => {

    const navigate = useNavigate()
    const features = [
        {
            title: "Detailed Destination Guides",
            desc: "Deep-dive into curated guides covering hidden gems, local transit, and logistics.",
            icon: <Globe2 size={32} />,
            gradient: "from-cyan-500 to-blue-500"
        },
        {
            title: "Seamless Trip Planning",
            desc: "Save hours of research with intelligent, seasonal itinerary builders.",
            icon: <Map size={32} />,
            gradient: "from-indigo-500 to-purple-500"
        },
        {
            title: "Budget Optimization",
            desc: "Smart cost estimation tools for backpackers and luxury travelers alike.",
            icon: <Wallet size={32} />,
            gradient: "from-emerald-500 to-teal-500"
        },
        {
            title: "Authentic Local Cuisine",
            desc: "Uncover hidden cafes and signature dishes recommended by local experts.",
            icon: <Utensils size={32} />,
            gradient: "from-orange-500 to-red-500"
        },
        {
            title: "Verified Travel Intel",
            desc: "Up-to-date safety protocols, visa guides, and travel requirements.",
            icon: <ShieldCheck size={32} />,
            gradient: "from-violet-500 to-fuchsia-500"
        }
    ];

    return (
        <section className="relative bg-slate-50 py-24 px-6 overflow-hidden">
            {/* Background Abstract Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-200/30 blur-[120px]" />
                <div className="absolute top-[40%] -right-[10%] w-[30%] h-[30%] rounded-full bg-cyan-200/30 blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Why ApniJourney</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                        Redefining Travel <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">for the Modern Explorer</span>
                    </h2>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                    {features.map((item, idx) => (
                        <div
                            key={idx}
                            className="group relative bg-white rounded-2xl sm:rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden flex flex-col justify-between p-4 sm:p-8"
                        >
                            {/* Background Gradient Hover Reveal Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />

                            {/* Micro Top Line Accent */}
                            <div className={`absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r ${item.gradient}`} />

                            <div>
                                {/* Responsive Icon Wrapper */}
                                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100/80 flex items-center justify-center text-slate-700 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-slate-900 group-hover:to-slate-800 shadow-sm transition-all duration-300 mb-3 sm:mb-6">
                                    <span className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                                        {item.icon}
                                    </span>
                                </div>

                                {/* Title & Description with Mobile Line Clamping */}
                                <h3 className="text-sm sm:text-lg md:text-xl font-black text-slate-900 mb-1 sm:mb-3 tracking-tight group-hover:text-blue-600 transition-colors line-clamp-1">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed text-[11px] sm:text-sm font-medium line-clamp-2 sm:line-clamp-none">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Sleek Bottom Learn More Indicator (Advanced Touch) */}
                            <div className="mt-3 sm:hidden pt-2 border-t border-slate-50 flex items-center text-[10px] font-bold text-blue-600 gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span>Know more</span> ➔
                            </div>
                        </div>
                    ))}

                    {/* =========================================================================
      ADVANCED CTA CARD (Responsive Mobile 2-Column Mesh Grid Matcher)
      ========================================================================= */}
                    <div className="col-span-2 sm:col-span-1 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 rounded-2xl sm:rounded-[2rem] p-4 sm:p-8 text-white flex flex-col justify-between shadow-xl relative overflow-hidden group border border-slate-800">

                        {/* Animated Radial Backdrop Glow */}
                        <div className="absolute -right-10 -bottom-10 w-32 h-32 sm:w-48 sm:h-48 bg-cyan-500/10 blur-[50px] rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>

                        {/* Decorative Airplane Vector Positioning */}
                        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 opacity-5 sm:opacity-10 text-white transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-700 ease-out">
                            <Plane className="w-16 h-16 sm:w-28 sm:h-28" />
                        </div>

                        <div className="z-10">
                            <h3 className="text-lg sm:text-2xl md:text-3xl font-black tracking-tight leading-tight mb-1.5 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-300">
                                Start Your <br className="hidden sm:inline" /> Next Chapter
                            </h3>
                            <p className="text-slate-400 mb-4 sm:mb-8 text-[11px] sm:text-sm font-medium leading-normal max-w-[85%] sm:max-w-none">
                                Everything you need to turn your wanderlust into reality.
                            </p>
                        </div>

                        <button
                            onClick={() => navigate('/destinations')}
                            className="z-10 flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 sm:py-4 bg-white text-slate-950 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-black hover:bg-cyan-400 hover:text-white active:scale-95 shadow-md hover:shadow-cyan-500/20 transition-all w-fit"
                        >
                            <span>Explore</span>
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseApnijourney;