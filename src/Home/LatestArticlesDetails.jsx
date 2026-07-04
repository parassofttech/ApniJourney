import React from "react";
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { useParams, Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "10 Hidden Places in Manali That Most Tourists Miss",
    category: "Adventure",
    date: "June 25, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&auto=format&fit=crop&q=80",
    author: "ApniJourney Team",
    content: [
      { type: "paragraph", text: "Manali is full of famous tourist attractions, but beyond Solang Valley and Mall Road lie many hidden gems waiting to be explored. These peaceful places offer breathtaking landscapes and a unique experience away from the crowds." },
      { type: "heading", text: "Top Hidden Places" },
      { type: "list", items: ["Hampta Village", "Sethan Valley", "Lama Dugh Trek", "Jana Waterfall", "Nehru Kund"] }
    ]
  },
  {
    id: 2,
    title: "Complete Goa Budget Guide for 2026 Travelers",
    category: "Travel Guide",
    date: "June 20, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1200&auto=format&fit=crop&q=80",
    author: "ApniJourney Team",
    content: [
      { type: "paragraph", text: "Goa can be enjoyed on almost any budget. Whether you're a backpacker or a luxury traveler, planning your expenses wisely helps you enjoy more while spending less." },
      { type: "heading", text: "Average Budget" },
      { type: "list", items: ["Hostel: ₹600-1200/night", "Hotel: ₹2000-5000/night", "Food: ₹500/day", "Bike Rent: ₹400-700/day", "Water Sports: ₹1000-3000"] }
    ]
  },
  {
    id: 3,
    title: "Top 15 Cafes in Himachal With Stunning Views",
    category: "Food & Cafe",
    date: "June 18, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&auto=format&fit=crop&q=80",
    author: "ApniJourney Team",
    content: [
      { type: "paragraph", text: "Himachal is home to some of India's most scenic mountain cafés where delicious food meets breathtaking Himalayan views." },
      { type: "heading", text: "Must Visit Cafes" },
      { type: "list", items: ["Cafe 1947", "Johnson's Cafe", "The Lazy Dog", "Drifter's Cafe", "Moon Dance Cafe"] }
    ]
  },
  {
    id: 4,
    title: "Best Time to Visit Kashmir: Month-by-Month Guide",
    category: "Planning",
    date: "June 15, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1200&auto=format&fit=crop&q=80",
    author: "ApniJourney Team",
    content: [
      { type: "paragraph", text: "Every season in Kashmir has its own charm. Spring brings flowers, summer offers pleasant weather, autumn paints the valleys golden, and winter transforms everything into a snowy paradise." },
      { type: "heading", text: "Season Guide" },
      { type: "list", items: ["March-May : Tulip Season", "June-August : Pleasant Weather", "September-November : Autumn", "December-February : Snowfall"] }
    ]
  }
];

const LatestArticlesDetails = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl sm:text-3xl font-black text-slate-900">Article Not Found</h1>
        <Link to="/" className="mt-4 text-orange-600 font-bold hover:underline">Back to feed</Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#fafbfc] text-slate-900 antialiased selection:bg-orange-600 selection:text-white">
      
      {/* Dynamic Immersive Header Section */}
      <div className="relative w-full h-[320px] sm:h-[500px] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover scale-105 animate-fade-in"
        />
        {/* Dark Radial Gradient Overlay for Premium Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#fafbfc] via-slate-950/40 to-slate-950/20" />
        
        {/* Floating Utilities Layer */}
        <div className="absolute top-6 left-0 right-0 max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md text-slate-900 px-4 py-2 rounded-full text-xs sm:text-sm font-black border border-slate-200/50 shadow-sm hover:bg-white transition-all hover:-translate-x-1"
          >
            <ArrowLeft className="w-4 h-4 text-orange-600" />
            <span className="hidden sm:inline">Back to Articles</span>
          </Link>
          
          <div className="flex gap-2">
            <button className="p-2 bg-white/90 backdrop-blur-md rounded-full border border-slate-200/50 text-slate-800 hover:bg-white shadow-sm transition-transform active:scale-95">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="p-2 bg-white/90 backdrop-blur-md rounded-full border border-slate-200/50 text-slate-800 hover:bg-white shadow-sm transition-transform active:scale-95">
              <Bookmark className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          MAIN ARTICLE CONTAINER BLOCK
          ========================================================================= */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative -mt-20 sm:-mt-32 z-20 pb-24">
        <div className="bg-white border border-slate-100 shadow-xl shadow-slate-200/40 rounded-3xl p-5 sm:p-10 md:p-12">
          
          {/* Category Pill Tag */}
          <span className="inline-flex items-center gap-1.5 bg-orange-50 border border-orange-100 text-orange-700 px-3.5 py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-inner">
            ⚡ {article.category}
          </span>

          {/* Core Title Layout */}
          <h1 className="mt-4 sm:mt-6 text-2xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-[1.15]">
            {article.title}
          </h1>

          {/* Enhanced Author Meta Info Bar */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-6 sm:mt-8 pb-6 sm:pb-8 border-b border-slate-100 text-xs sm:text-sm text-slate-500 font-bold">
            <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-full pr-3 pl-1.5 py-1">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center text-white text-[10px] font-black">
                AJ
              </div>
              <span className="text-slate-800">{article.author}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              <span>{article.date}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" />
              <span className="text-orange-600">{article.readTime}</span>
            </div>
          </div>

          {/* =========================================================================
              DYNAMIC CONTENT RENDER STRIP
              ========================================================================= */}
          <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
            {article.content.map((item, index) => {
              if (item.type === "paragraph") {
                return (
                  <p key={index} className="text-slate-700 text-sm sm:text-lg leading-[1.75] font-medium tracking-wide">
                    {item.text}
                  </p>
                );
              }

              if (item.type === "heading") {
                return (
                  <h2 key={index} className="text-xl sm:text-3xl font-black text-slate-950 tracking-tight pt-4 mt-8 mb-2 flex items-center gap-2.5 before:w-1 before:h-6 before:bg-orange-500 before:rounded-full">
                    {item.text}
                  </h2>
                );
              }

              if (item.type === "list") {
                return (
                  <div key={index} className="bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-100 rounded-2xl p-4 sm:p-6 my-4">
                    <ul className="space-y-3 sm:space-y-4">
                      {item.items.map((listItem, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-800 text-xs sm:text-base font-semibold">
                          <span className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-[10px] sm:text-xs font-black mt-0.5">
                            {i + 1}
                          </span>
                          <span className="pt-0.5">{listItem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }

              return null;
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LatestArticlesDetails;