import React from "react";
import { motion } from "framer-motion";
import {
  Map,
  Compass,
  Wallet,
  Users,
  Heart,
  ShieldCheck,
  Smartphone,
  BookOpen,
  Camera,
  MapPin,
  CalendarDays,
  Sparkles,
  Plane,
  Route,
  Globe2,
  Star,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

const WhyChooseApniJourney = () => {
  const features = [
    {
      icon: Map,
      title: "Personalized Trip Planning",
      text: "Plan your journeys according to your destination, budget, travel style and schedule. ApniJourney helps you organize your travel ideas in one convenient place.",
    },
    {
      icon: Compass,
      title: "Discover Amazing Destinations",
      text: "Explore popular destinations as well as lesser-known places across India. Find new experiences beyond the usual tourist attractions.",
    },
    {
      icon: Wallet,
      title: "Budget-Friendly Travel",
      text: "Travel smarter by planning your expenses before your journey. Keep your estimated budget, destination and trip details organized.",
    },
    {
      icon: Users,
      title: "Traveler Community",
      text: "Connect with travel experiences shared by other travelers. Discover places through real journeys, photos and recommendations.",
    },
    {
      icon: BookOpen,
      title: "Useful Travel Guides",
      text: "Read destination guides, travel tips, packing suggestions, seasonal recommendations and practical information before your trip.",
    },
    {
      icon: Camera,
      title: "Share Your Memories",
      text: "Create travel posts and share your favorite destinations, photographs, experiences and unforgettable moments with the travel community.",
    },
  ];

  const benefits = [
    "Easy trip planning and organization",
    "Destination discovery across India",
    "Budget-conscious travel planning",
    "Travel guides and useful tips",
    "Community-driven travel experiences",
    "Trip photos and memorable moments",
    "Mobile-friendly travel experience",
    "Simple and modern user interface",
    "Personal travel history",
    "Helpful information for different travel styles",
  ];

  const travelTypes = [
    {
      icon: Compass,
      title: "Adventure Travel",
      text: "Discover mountains, trekking destinations, beaches, wildlife and exciting outdoor experiences.",
    },
    {
      icon: Heart,
      title: "Honeymoon Trips",
      text: "Find romantic destinations, peaceful escapes and memorable places for couples.",
    },
    {
      icon: Users,
      title: "Family Vacations",
      text: "Plan comfortable and enjoyable journeys with destinations suitable for families.",
    },
    {
      icon: Globe2,
      title: "Solo Travel",
      text: "Explore destinations independently and create a journey based on your own interests.",
    },
  ];

  const faqs = [
    {
      question: "What is ApniJourney?",
      answer:
        "ApniJourney is a travel platform designed to help travelers discover destinations, plan trips, manage travel information and explore experiences shared by other travelers.",
    },
    {
      question: "Can I plan my own trip on ApniJourney?",
      answer:
        "Yes. You can organize important trip information such as destination, dates, budget, photos and other journey details in one place.",
    },
    {
      question: "Is ApniJourney useful for solo travelers?",
      answer:
        "Yes. Solo travelers can use destination information, travel guides, budget planning ideas and community experiences to make better travel decisions.",
    },
    {
      question: "Can I share my travel experience?",
      answer:
        "Yes. Travelers can share posts, photos and experiences so that other members can discover new destinations and travel ideas.",
    },
    {
      question: "Does ApniJourney focus only on popular destinations?",
      answer:
        "No. The platform can help travelers discover both well-known destinations and lesser-known places that may provide unique experiences.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative min-h-[650px] flex items-center overflow-hidden">

        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1800&auto=format&fit=crop&q=85"
            alt="Beautiful travel destination"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-slate-950/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24 w-full">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white mb-7">
              <Sparkles size={16} className="text-yellow-300" />
              <span className="text-sm font-semibold">
                Your Journey. Your Story. Your India.
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-green-300">
                ApniJourney?
              </span>
            </h1>

            <p className="mt-7 text-lg md:text-xl text-slate-200 leading-8 max-w-3xl">
              Travel is more than reaching a destination. It is about the
              roads you take, people you meet, places you discover and
              memories you create. ApniJourney is designed to make every part
              of that experience simpler, smarter and more enjoyable.
            </p>

            <div className="flex flex-wrap gap-4 mt-9">

              <Link
                to="/"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-slate-900 font-bold hover:bg-cyan-50 transition"
              >
                Start Exploring
                <ArrowRight
                  size={19}
                  className="group-hover:translate-x-1 transition"
                />
              </Link>

              <Link
                to="/travel-guide"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-white/30 bg-white/10 backdrop-blur-md text-white font-bold hover:bg-white/20 transition"
              >
                <BookOpen size={19} />
                Travel Guides
              </Link>

            </div>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >

            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
              Travel Made Better
            </span>

            <h2 className="text-4xl md:text-5xl font-black mt-3">
              Everything You Need for a Better Journey
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-8">
              Planning a trip can sometimes feel overwhelming. You may have
              to search for destinations, compare places, estimate expenses,
              remember travel dates, save photographs and look for useful
              recommendations from different sources. ApniJourney brings
              these travel needs together into one simple experience.
            </p>

            <p className="mt-5 text-lg text-slate-600 leading-8">
              Whether you are planning your first solo adventure, a family
              vacation, a romantic honeymoon, a weekend escape or a long
              road trip, ApniJourney helps you turn travel ideas into
              organized journeys.
            </p>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          FEATURE GRID
      ===================================================== */}

      <section className="py-24 bg-white px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <span className="text-cyan-600 font-bold uppercase tracking-widest text-sm">
              Our Features
            </span>

            <h2 className="text-4xl md:text-5xl font-black mt-3">
              Why Travelers Love ApniJourney
            </h2>

            <p className="mt-5 text-slate-600 text-lg">
              Designed around the real needs of modern travelers.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{ y: -7 }}
                  className="group p-7 rounded-3xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-2xl transition-all duration-300"
                >

                  <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
                    <Icon size={27} />
                  </div>

                  <h3 className="text-xl font-bold mt-6">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-slate-600 leading-7">
                    {feature.text}
                  </p>

                </motion.article>
              );
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          STORY SECTION
      ===================================================== */}

      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <span className="text-green-600 font-bold uppercase tracking-widest text-sm">
              More Than a Travel Website
            </span>

            <h2 className="text-4xl md:text-5xl font-black mt-4 leading-tight">
              Your Travel Companion From Planning to Memories
            </h2>

            <p className="mt-6 text-slate-600 text-lg leading-8">
              ApniJourney is built around one simple idea: travel should feel
              exciting, not complicated. Instead of keeping your travel
              information scattered across notes, screenshots and different
              websites, you can organize your journey in one place.
            </p>

            <p className="mt-5 text-slate-600 text-lg leading-8">
              From discovering a destination to remembering the journey after
              you return home, every stage of travel can become part of your
              personal travel story.
            </p>

            <div className="mt-8 space-y-4">

              {benefits.slice(0, 6).map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={21}
                    className="text-green-500 shrink-0"
                  />

                  <span className="font-medium text-slate-700">
                    {benefit}
                  </span>
                </div>
              ))}

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >

            <img
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=1200&auto=format&fit=crop&q=85"
              alt="Traveler exploring a destination"
              className="w-full h-[550px] object-cover rounded-[40px] shadow-2xl"
            />

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl max-w-xs">

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-2xl bg-yellow-100 flex items-center justify-center">
                  <Star className="text-yellow-500 fill-yellow-500" />
                </div>

                <div>
                  <p className="font-black text-xl">
                    Travel Smarter
                  </p>

                  <p className="text-sm text-slate-500">
                    Explore. Plan. Experience.
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* =====================================================
          TRAVEL TYPES
      ===================================================== */}

      <section className="py-24 bg-slate-900 text-white px-6">

        <div className="max-w-7xl mx-auto">

          <div className="max-w-3xl mb-14">

            <span className="text-cyan-300 font-bold uppercase tracking-widest text-sm">
              For Every Kind of Traveler
            </span>

            <h2 className="text-4xl md:text-5xl font-black mt-4">
              Your Travel Style, Your Way
            </h2>

            <p className="text-slate-300 text-lg leading-8 mt-5">
              Everyone travels differently. ApniJourney gives you the
              flexibility to explore and plan trips according to your own
              travel style.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {travelTypes.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="p-7 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                >

                  <Icon size={30} className="text-cyan-300" />

                  <h3 className="text-xl font-bold mt-6">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 mt-3 leading-7">
                    {item.text}
                  </p>

                </motion.div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          PLANNING PROCESS
      ===================================================== */}

      <section className="py-24 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center max-w-3xl mx-auto mb-14">

            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
              Simple Process
            </span>

            <h2 className="text-4xl md:text-5xl font-black mt-3">
              Plan Your Journey in Simple Steps
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              {
                number: "01",
                icon: Compass,
                title: "Discover",
                text: "Find destinations and travel inspiration.",
              },
              {
                number: "02",
                icon: CalendarDays,
                title: "Plan",
                text: "Organize dates, destinations and travel details.",
              },
              {
                number: "03",
                icon: Wallet,
                title: "Manage",
                text: "Keep your budget and important trip information organized.",
              },
              {
                number: "04",
                icon: Camera,
                title: "Remember",
                text: "Save and share the memories created during your journey.",
              },
            ].map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative p-7 rounded-3xl bg-slate-50 border border-slate-200"
                >

                  <span className="text-5xl font-black text-blue-100">
                    {step.number}
                  </span>

                  <div className="mt-4 w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                    <Icon size={23} />
                  </div>

                  <h3 className="text-xl font-bold mt-5">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 mt-2 leading-7">
                    {step.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          WHY APNIJOURNEY CONTENT
      ===================================================== */}

      <section className="py-24 px-6 bg-gradient-to-b from-blue-50 to-white">

        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-12">

            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
              The ApniJourney Difference
            </span>

            <h2 className="text-4xl md:text-5xl font-black mt-3">
              Built for Real Travel Experiences
            </h2>

          </div>

          <div className="space-y-7 text-lg text-slate-600 leading-8">

            <p>
              Modern travel is full of possibilities, but having too many
              options can sometimes make planning difficult. ApniJourney aims
              to simplify this experience by bringing destination discovery,
              travel planning and traveler experiences closer together.
            </p>

            <p>
              One of the biggest advantages of using a dedicated travel
              platform is organization. Instead of remembering every detail
              separately, travelers can keep their journey information
              together. Dates, destinations, estimated budgets, photographs
              and personal experiences can become part of one organized
              travel story.
            </p>

            <p>
              ApniJourney also encourages travelers to discover India beyond
              the most common tourist routes. India has an enormous variety
              of landscapes and experiences, from Himalayan valleys and
              peaceful hill stations to tropical beaches, historic cities,
              deserts, forests and cultural destinations.
            </p>

            <p>
              Travel inspiration becomes even more useful when it comes from
              experiences. Seeing where another traveler went, what they
              photographed and what they experienced can help people discover
              destinations they may not have considered before.
            </p>

            <p>
              Another important part of better travel planning is budget
              awareness. A memorable journey does not necessarily require an
              expensive vacation. With thoughtful planning, travelers can
              choose destinations, activities and accommodation according to
              their available budget.
            </p>

            <p>
              The platform is also designed to be useful for different kinds
              of journeys. A solo traveler may want flexibility and
              independence, while families may prioritize comfort and
              convenience. Couples may search for romantic experiences, and
              adventure travelers may be interested in trekking, road trips
              and outdoor activities.
            </p>

            <p>
              Ultimately, ApniJourney is about making travel more personal.
              Your journey does not have to look like someone else's journey.
              You can discover what interests you, plan according to your
              priorities and create memories that are uniquely yours.
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          FEATURES LIST
      ===================================================== */}

      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

          <div>

            <span className="text-green-600 font-bold uppercase tracking-widest text-sm">
              Complete Travel Experience
            </span>

            <h2 className="text-4xl md:text-5xl font-black mt-4">
              Everything in One Place
            </h2>

            <p className="text-slate-600 text-lg leading-8 mt-5">
              From discovering destinations to managing your travel memories,
              ApniJourney provides a collection of useful features designed
              around the complete travel journey.
            </p>

          </div>

          <div className="grid sm:grid-cols-2 gap-4">

            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex gap-3 items-start p-4 rounded-2xl bg-white border border-slate-200 shadow-sm"
              >
                <CheckCircle2
                  size={21}
                  className="text-green-500 mt-0.5 shrink-0"
                />

                <span className="font-medium text-slate-700">
                  {benefit}
                </span>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6">

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

          <div>
            <MapPin className="mx-auto mb-3" size={30} />
            <h3 className="text-3xl md:text-4xl font-black">
              100+
            </h3>
            <p className="text-blue-100 mt-1">
              Travel Ideas
            </p>
          </div>

          <div>
            <Route className="mx-auto mb-3" size={30} />
            <h3 className="text-3xl md:text-4xl font-black">
              50+
            </h3>
            <p className="text-blue-100 mt-1">
              Destinations
            </p>
          </div>

          <div>
            <Camera className="mx-auto mb-3" size={30} />
            <h3 className="text-3xl md:text-4xl font-black">
              1000+
            </h3>
            <p className="text-blue-100 mt-1">
              Travel Memories
            </p>
          </div>

          <div>
            <Users className="mx-auto mb-3" size={30} />
            <h3 className="text-3xl md:text-4xl font-black">
              Growing
            </h3>
            <p className="text-blue-100 mt-1">
              Travel Community
            </p>
          </div>

        </div>

      </section>

     

      

    </main>
  );
};

export default WhyChooseApniJourney;