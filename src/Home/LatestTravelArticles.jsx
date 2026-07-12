import React from "react";
import { Calendar, ArrowRight, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "10 Hidden Places in Manali That Most Tourists Miss",
    category: "Adventure",
    date: "June 25, 2026",
    readTime: "6 min read",
    image:
      "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR3KXQM9jumObFgdcyHKs2KOADAQk8VZBcjhJSXJcFVMra8Mfy1OlJfL6WZZB4Cc6CLrb4F_5fM3y88zYKUKv-BycU&s=19",
  },
  {
    id: 2,
    title: "Complete Goa Budget Guide for 2026 Travelers",
    category: "Travel Guide",
    date: "June 20, 2026",
    readTime: "8 min read",
    image:
      "https://i0.wp.com/indiatravel.com/wp-content/uploads/2021/12/Goa-Travel.jpg?w=1000&ssl=1",
  },
  {
    id: 3,
    title: "Top 15 Cafes in Himachal With Stunning Views",
    category: "Food & Cafe",
    date: "June 18, 2026",
    readTime: "5 min read",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMzpVn8KRuvEhxDUojVZmldZstnknyYfhPGOlv2BJdl5u6CgN1jI4FlY&s=10",
  },
  {
    id: 4,
    title: "Best Time to Visit Kashmir: Month-by-Month Guide",
    category: "Planning",
    date: "June 15, 2026",
    readTime: "7 min read",
    image:
      "https://www.shutterstock.com/image-photo/mountains-view-aurang-kel-azad-260nw-2507475391.jpg",
  },
];

const LatestTravelArticles=()=> {
  return (
    <section className="relative py-24 overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">

          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm font-semibold uppercase tracking-wider">
              🔥 Trending Travel Stories
            </span>

            <h2 className="mt-5 text-4xl md:text-6xl font-black bg-gradient-to-r from-slate-900 via-cyan-700 to-slate-900 bg-clip-text text-transparent">
              Latest Travel Articles
            </h2>

            <p className="mt-4 text-gray-600 text-lg max-w-2xl">
              Discover travel tips, destination guides, hidden gems, budget
              breakdowns, and expert recommendations from across India.
            </p>
          </div>

          

        </div>

        {/* Featured Article */}
        <div className="relative overflow-hidden rounded-[32px] mb-10 group">

          <img
            src="https://www.shutterstock.com/image-photo/beautiful-mountains-landscape-pictures-arang-260nw-2499596223.jpg"
            alt="Featured Travel Story"
            loading="lazy"
                decoding="async"
                fetchPriority="low"
            className="h-[500px] w-full object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

          <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white max-w-4xl">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 mb-5">
              <TrendingUp size={16} />
              Featured Story
            </div>

            <h3 className="text-3xl md:text-5xl font-black leading-tight">
              Ultimate Guide to Exploring Himachal Pradesh in Every Season
            </h3>

            <p className="mt-4 text-gray-200 text-lg leading-relaxed">
              Discover breathtaking valleys, hidden villages, adventure
              activities, and scenic road trips through the heart of the
              Himalayas.
            </p>

            <div className="flex flex-wrap items-center gap-6 mt-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                July 02, 2026
              </div>

              <div className="flex items-center gap-2">
                <Clock size={16} />
                10 min read
              </div>
            </div>

          </div>

        </div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

          {articles.map((article) => (
            <article
              key={article.id}
              className="group bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                decoding="async"
                fetchPriority="low"
                  className="h-60 w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6">

                <span className="inline-block px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-bold uppercase tracking-wider">
                  {article.category}
                </span>

                <h3 className="mt-4 text-xl font-bold text-gray-900 line-clamp-2 group-hover:text-cyan-700 transition">
                  {article.title}
                </h3>

                <div className="flex items-center justify-between mt-5 text-sm text-gray-500">

                  <div className="flex items-center gap-2">
                    <Calendar size={15} />
                    {article.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={15} />
                    {article.readTime}
                  </div>

                </div>

                <Link
  to={`/article/${article.id}`}
  className="mt-6 flex items-center gap-2 text-cyan-700 font-bold"
>
  Read Article
  <ArrowRight size={16} />
</Link>

              </div>
            </article>
          ))}

        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 relative overflow-hidden rounded-[32px] bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 p-10 md:p-14 text-white">

          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center justify-between">

            <div>
              <h3 className="text-3xl md:text-4xl font-black">
                Never Miss a Travel Update ✈️
              </h3>

              <p className="mt-3 text-cyan-100 max-w-2xl">
                Get destination guides, travel tips, hidden gems, and exclusive
                travel inspiration delivered directly to your inbox.
              </p>
            </div>

            <div className="flex w-full lg:w-auto gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-5 py-4 rounded-2xl text-gray-900 w-full lg:w-80 outline-none"
              />

              <button className="px-6 py-4 rounded-2xl bg-white text-cyan-700 font-bold hover:scale-105 transition">
                Subscribe
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}


export default  LatestTravelArticles