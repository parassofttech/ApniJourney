import React from "react";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    title: "10 Hidden Places in Manali That Most Tourists Miss",
    category: "Adventure",
    date: "June 25, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&auto=format&fit=crop&q=80",

    author: "ApniJourney Team",

    content: [
      {
        type: "paragraph",
        text: "Manali is full of famous tourist attractions, but beyond Solang Valley and Mall Road lie many hidden gems waiting to be explored. These peaceful places offer breathtaking landscapes and a unique experience away from the crowds."
      },
      {
        type: "heading",
        text: "Top Hidden Places"
      },
      {
        type: "list",
        items: [
          "Hampta Village",
          "Sethan Valley",
          "Lama Dugh Trek",
          "Jana Waterfall",
          "Nehru Kund"
        ]
      }
    ]
  },

  {
    id: 2,
    title: "Complete Goa Budget Guide for 2026 Travelers",
    category: "Travel Guide",
    date: "June 20, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1200&auto=format&fit=crop&q=80",

    author: "ApniJourney Team",

    content: [
      {
        type: "paragraph",
        text: "Goa can be enjoyed on almost any budget. Whether you're a backpacker or a luxury traveler, planning your expenses wisely helps you enjoy more while spending less."
      },
      {
        type: "heading",
        text: "Average Budget"
      },
      {
        type: "list",
        items: [
          "Hostel: ₹600-1200/night",
          "Hotel: ₹2000-5000/night",
          "Food: ₹500/day",
          "Bike Rent: ₹400-700/day",
          "Water Sports: ₹1000-3000"
        ]
      }
    ]
  },

  {
    id: 3,
    title: "Top 15 Cafes in Himachal With Stunning Views",
    category: "Food & Cafe",
    date: "June 18, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&auto=format&fit=crop&q=80",

    author: "ApniJourney Team",

    content: [
      {
        type: "paragraph",
        text: "Himachal is home to some of India's most scenic mountain cafés where delicious food meets breathtaking Himalayan views."
      },
      {
        type: "heading",
        text: "Must Visit Cafes"
      },
      {
        type: "list",
        items: [
          "Cafe 1947",
          "Johnson's Cafe",
          "The Lazy Dog",
          "Drifter's Cafe",
          "Moon Dance Cafe"
        ]
      }
    ]
  },

  {
    id: 4,
    title: "Best Time to Visit Kashmir: Month-by-Month Guide",
    category: "Planning",
    date: "June 15, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=1200&auto=format&fit=crop&q=80",

    author: "ApniJourney Team",

    content: [
      {
        type: "paragraph",
        text: "Every season in Kashmir has its own charm. Spring brings flowers, summer offers pleasant weather, autumn paints the valleys golden, and winter transforms everything into a snowy paradise."
      },
      {
        type: "heading",
        text: "Season Guide"
      },
      {
        type: "list",
        items: [
          "March-May : Tulip Season",
          "June-August : Pleasant Weather",
          "September-November : Autumn",
          "December-February : Snowfall"
        ]
      }
    ]
  }
];

export default articles;

const LatestArticlesDetails = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6">

        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-cyan-700 font-semibold hover:text-cyan-900 mb-8"
        >
          <ArrowLeft size={18} />
          Back to Articles
        </Link>

        {/* Hero Image */}
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&auto=format&fit=crop&q=80"
            alt="Travel"
            className="w-full h-[450px] object-cover"
          />
        </div>

        {/* Category */}
        <span className="inline-block mt-8 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-bold">
          Adventure
        </span>

        {/* Title */}
        <h1 className="mt-5 text-4xl md:text-5xl font-black text-gray-900 leading-tight">
          Ultimate Guide to Exploring Himachal Pradesh in Every Season
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap gap-6 mt-6 text-gray-500">
          <div className="flex items-center gap-2">
            <User size={18} />
            ApniJourney Team
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={18} />
            July 02, 2026
          </div>

          <div className="flex items-center gap-2">
            <Clock size={18} />
            10 min read
          </div>
        </div>

        {/* Content */}
        <div className="mt-10 bg-white rounded-3xl shadow-lg p-8 md:p-10">

          <p className="text-gray-600 leading-8 mb-6">
            Himachal Pradesh is one of India's most beautiful mountain states,
            offering breathtaking valleys, snow-covered peaks, charming villages,
            thrilling adventure sports, and peaceful monasteries. Whether you're
            planning a family vacation, honeymoon, solo backpacking trip, or an
            adventure getaway, Himachal has something special for everyone.
          </p>

          <h2 className="text-3xl font-bold mb-4">
            Why Visit Himachal Pradesh?
          </h2>

          <p className="text-gray-600 leading-8 mb-6">
            From the bustling streets of Manali to the peaceful beauty of Spiti
            Valley and the colonial charm of Shimla, every destination offers a
            unique experience. Visitors can enjoy trekking, skiing, river rafting,
            camping, mountain cafés, waterfalls, and spectacular Himalayan views.
          </p>

          <img
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&auto=format&fit=crop&q=80"
            alt=""
            className="rounded-2xl my-8 w-full h-[380px] object-cover"
          />

          <h2 className="text-3xl font-bold mb-4">
            Top Travel Tips
          </h2>

          <ul className="space-y-3 text-gray-600 list-disc pl-6 leading-8">
            <li>Carry warm clothes throughout the year.</li>
            <li>Book hotels early during peak season.</li>
            <li>Keep cash for remote villages.</li>
            <li>Start sightseeing early to avoid traffic.</li>
            <li>Respect local culture and keep nature clean.</li>
          </ul>

          {/* Quote */}
          <div className="mt-10 bg-cyan-50 border-l-4 border-cyan-600 p-6 rounded-xl">
            <p className="italic text-lg text-cyan-900">
              "Travel isn't always about the destination—sometimes the mountain
              roads become the most unforgettable part of the journey."
            </p>
          </div>

        </div>

        {/* Related */}
        <div className="mt-14">
          <h2 className="text-3xl font-bold mb-6">
            Related Articles
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Hidden Places in Manali",
              "Goa Budget Guide",
              "Best Cafes in Himachal",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition"
              >
                <h3 className="font-bold text-lg">{item}</h3>
                <button className="mt-4 text-cyan-700 font-semibold">
                  Read More →
                </button>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default LatestArticlesDetails;