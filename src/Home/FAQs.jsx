


import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";


const faqs = [ 
     {
    question: "What is ApniJourney?",
    answer:
      "ApniJourney is a travel guide platform that helps travelers discover the best destinations, attractions, hotels, restaurants, travel budgets, local food, shopping spots, and safety tips across India.",
  },
  {
    question: "Is ApniJourney free to use?",
    answer:
      "Yes! ApniJourney is completely free. You can explore travel guides, destination information, and planning resources without paying any subscription fees.",
  },
  {
    question: "Can I find budget travel information?",
    answer:
      "Absolutely. Every destination includes estimated travel costs, hotel prices, food expenses, transportation costs, and money-saving tips for budget travelers.",
  },
  {
    question: "Are the hotel and restaurant recommendations reliable?",
    answer:
      "Yes. We recommend popular hotels and restaurants based on traveler experiences, ratings, location, and overall quality to help you make better travel decisions.",
  },
  {
    question: "Does ApniJourney cover all Indian destinations?",
    answer:
      "We are continuously adding new destinations. Our goal is to provide comprehensive travel guides for the most popular tourist places across India.",
  },
  {
    question: "Can I use ApniJourney on mobile devices?",
    answer:
      "Yes. ApniJourney is fully responsive and works smoothly on desktops, tablets, and smartphones.",
  },
  {
    question: "How often is the travel information updated?",
    answer:
      "We regularly update our destination guides to ensure travelers receive accurate and up-to-date information regarding attractions, hotels, restaurants, and travel tips.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No. You can browse destinations and access travel guides without creating an account.",
  },
  {
    question: "Can I plan my entire trip using ApniJourney?",
    answer:
      "Yes. From choosing the best season to visit, finding hotels, estimating your budget, exploring attractions, and learning safety tips, ApniJourney helps you plan your complete trip.",
  },
  {
    question: "Why should I choose ApniJourney?",
    answer:
      "ApniJourney combines detailed destination guides, practical travel tips, curated recommendations, and a beautiful user experience to make trip planning simple and enjoyable.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative py-24 px-6 bg-slate-50">
      {/* Decorative Background Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-100/50 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-cyan-100/50 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-6">
            <HelpCircle size={16} className="text-cyan-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Support Center</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
            Frequently Asked <span className="text-cyan-600">Questions</span>
          </h2>
          <p className="text-slate-500 text-lg">Clear answers to help you navigate your journey with confidence.</p>
        </div>

        {/* FAQ Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div
                key={index}
                className={`group relative bg-white border ${
                  isOpen ? "border-cyan-200 shadow-lg shadow-cyan-500/5" : "border-slate-200 shadow-sm"
                } rounded-[1.5rem] transition-all duration-300 overflow-hidden`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex justify-between items-center p-6 md:p-8 text-left focus:outline-none"
                >
                  <h3 className={`text-lg md:text-xl font-bold transition-colors ${isOpen ? "text-cyan-700" : "text-slate-800"}`}>
                    {faq.question}
                  </h3>
                  
                  {/* Custom Indicator */}
                  <div className={`ml-4 shrink-0 p-1.5 rounded-full border transition-all duration-300 ${
                    isOpen ? "bg-cyan-50 border-cyan-200 text-cyan-600 rotate-180" : "bg-slate-50 border-slate-100 text-slate-400"
                  }`}>
                    <ChevronDown size={20} />
                  </div>
                </button>

                {/* Animated Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-8 text-slate-500 leading-relaxed font-medium">
                      <div className="pt-2 border-t border-slate-100">
                        <p className="mt-4">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pro Tip/Call to Action */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-full font-bold shadow-xl hover:bg-slate-800 transition-colors cursor-pointer">
            <Sparkles size={18} className="text-cyan-400" />
            <span>Still have questions? Contact Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;