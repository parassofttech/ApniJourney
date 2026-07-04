import React from "react";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { useParams, Link } from "react-router-dom";

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



const LatestArticlesDetails = () => {

  const { id } = useParams();

const article = articles.find((a) => a.id === Number(id));

if (!article) return <h1>Article Not Found</h1>;
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
          <h2>{article.title}</h2>
          <img
            src={article.image} alt={article.title} 
            className="w-full h-[450px] object-cover"
          />
        </div>

        {/* Category */}
        <span className="inline-block mt-8 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 text-sm font-bold">
          {article.category}
        </span>

        {/* Title */}
        <h2 className="mt-5 text-4xl md:text-5xl font-black text-gray-900 leading-tight">
          {article.title}
        </h2>

        {/* Meta */}
        <div className="flex flex-wrap gap-6 mt-6 text-gray-500">
          <div className="flex items-center gap-2">
            <User size={18} />
            ApniJourney Team
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={18} />
            {article.date}
          </div>

          <div className="flex items-center gap-2">
            <Clock size={18} />
            {article.readTime}
          </div>
        </div>

        {/* Content */}

        {article.content.map((item, index) => {
  if (item.type === "heading") {
    return (
      <h2 key={index} className="text-3xl font-bold mt-10 mb-4">
        {item.text}
      </h2>
    );
  }

  if (item.type === "paragraph") {
    return (
      <p key={index} className="text-gray-600 leading-8 mb-6">
        {item.text}
      </p>
    );
  }

  if (item.type === "list") {
    return (
      <ul key={index} className="list-disc pl-6 space-y-2">
        {item.items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    );
  }

  return null;
})}
        

        

      </div>
    </section>
  );
};

export default LatestArticlesDetails;