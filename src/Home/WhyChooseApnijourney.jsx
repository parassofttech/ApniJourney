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
            Redefining Travel <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">for the Modern Explorer</span>
          </h2>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity`} />
              
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 group-hover:text-white group-hover:bg-current transition-all duration-300 mb-6">
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}

          {/* CTA Card */}
          <div className="bg-slate-900 rounded-[2rem] p-8 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Plane size={120} />
            </div>
            <div>
              <h3 className="text-3xl font-black mb-4">Start Your <br/> Next Chapter</h3>
              <p className="text-slate-400 mb-8 text-sm">Everything you need to turn your wanderlust into a reality.</p>
            </div>
            <button onClick={()=>navigate('/destinations')} className="flex items-center gap-2 px-6 py-4 bg-white text-slate-900 rounded-2xl font-bold hover:bg-cyan-400 hover:text-white transition-all w-fit">
              Explore Destinations <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseApnijourney;