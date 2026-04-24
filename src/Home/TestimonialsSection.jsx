import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Asha R.",
    location: "Mumbai, India",
    rating: 5,
    quote:
      "Perfect trip planner — organised my Goa trip end-to-end. Loved the photo album feature!",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=60",
  },
  {
    id: 2,
    name: "Rahul S.",
    location: "Bengaluru, India",
    rating: 5,
    quote:
      "Smooth UI, fast. Booked stays and tracked expenses in one place. Highly recommended.",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmcDmhY_1i62biEewwnYIgiSX99xW4JGYAVw&s",
  },
  {
    id: 3,
    name: "Priya K.",
    location: "Delhi, India",
    rating: 4,
    quote:
      "Loved the itinerary suggestions and nearby attractions feature — saved us hours of planning.",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREHf3EL8Y8hxTZRyPgbeXyZ_hDmD21prSOAw&s",
  },
  {
    id: 4,
    name: "Vikram T.",
    location: "Chennai, India",
    rating: 5,
    quote:
      "Offline maps and photo uploads worked flawlessly on my Ladakh trip. Solid app.",
    avatar:
      "https://i.pinimg.com/736x/8d/f9/45/8df94550b999ae191a71effa1072f030.jpg",
  },
  {
    id: 5,
    name: "Nisha P.",
    location: "Kolkata, India",
    rating: 4,
    quote:
      "Great UX. The trip notes + expense split feature made group travel simple and fun.",
    avatar:
      "https://pbs.twimg.com/profile_images/1270730220341825536/qecoh2hI_400x400.jpg",
  },
  {
    id: 6,
    name: "Arjun M.",
    location: "Pune, India",
    rating: 5,
    quote:
      "I loved the memories gallery — seamless previews and share option was a win for us.",
    avatar:
      "https://media.licdn.com/dms/image/v2/C5603AQHlvnm4I9ldNQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1593483851747?e=2147483647&v=beta&t=oXrzfy5sTv9O7uYt6hSrDXsvRHbskwW8inXvzcUU2N4",
  },
  {
    id: 7,
    name: "Sana L.",
    location: "Hyderabad, India",
    rating: 5,
    quote:
      "Trip reminders and packing checklists saved me from forgetting essentials. Super helpful!",
    avatar:
      "https://kpopping.com/documents/c7/3/800/240309-TWICE-Sana-Music-Korea-Fansign-documents-2(1).jpeg?v=d965b",
  },
  {
    id: 8,
    name: "Kabir R.",
    location: "Jaipur, India",
    rating: 4,
    quote:
      "Offers & discounts section actually gave me a 15% hotel coupon. Loved that surprise!",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQE76rTr4unZIA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721749672786?e=2147483647&v=beta&t=opWqoIHHGwgvyfTQ_EpxdjAc6gVQhX1ABGq0Avl8Nq8",
  },
  {
    id: 9,
    name: "Meera D.",
    location: "Lucknow, India",
    rating: 5,
    quote:
      "The trip export (PDF) was a life-saver for sharing itinerary with grandparents.",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQF3ImdKZGx0fQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1671132356439?e=2147483647&v=beta&t=gxPrAtMA_-JJC3qZXtCRRVtt1hsMVWaSJXGdEf1drRc",
  },
  {
    id: 10,
    name: "Siddharth G.",
    location: "Noida, India",
    rating: 4,
    quote:
      "Simple, clean and practical. The dashboard overview is perfect for quick checks.",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlpweXYEpFVUKXwCgkbejoqozF3e0xZSbchg&s",
  },
  {
    id: 11,
    name: "Isha V.",
    location: "Surat, India",
    rating: 5,
    quote:
      "Love the mobile-first layout — looks and feels like a native travel app on my phone.",
    avatar:
      "https://media.licdn.com/dms/image/v2/D4E03AQE_VTiYCLaT-g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721267014800?e=2147483647&v=beta&t=RttRY-m5bSQBMAVoxgX0x8d6n4oa77pG1QE9tTm53SI",
  },
  {
    id: 12,
    name: "Rohan C.",
    location: "Ahmedabad, India",
    rating: 5,
    quote:
      "The quick stats on dashboard help track my trips and budget at a glance. Nicely done!",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQEeyXHe3ttrHg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718219339933?e=2147483647&v=beta&t=BGLEzwf5UKDiAtIWAOC6oxvxmdfYtwzc9Nf7sK3SS40",
  },
];

// Duplicate testimonials so marquee is seamless
const doubleTestimonials = [...testimonials, ...testimonials];

const TestimonialsSection = () => {
  return (
    <section className="py-8 bg-gradient-to-b from-yellow-300/40 via-green-400/30 to-blue-400/30 -z-10">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">What travelers say</h3>
        <p className="text-gray-500 mb-6">
          Real feedback from users — continuously moving so visitors notice the social proof.
        </p>

        {/* Marquee container */}
        <div
          className="relative overflow-hidden"
          aria-hidden="false"
          role="region"
          aria-label="Testimonials marquee"
        >
          {/* Inline styles for marquee animation */}
          <style>{`
            @keyframes marquee-horizontal {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); } /* move half because we duplicated items */
            }
            .marquee {
              display: flex;
              gap: 1rem;
              align-items: stretch;
              animation: marquee-horizontal 28s linear infinite;
              will-change: transform;
            }
            .marquee:hover {
              animation-play-state: paused;
            }

            /* For smaller screens, speed up a bit */
            @media (max-width: 640px) {
              .marquee { animation-duration: 18s; }
            }
          `}</style>

          {/* The track: duplicate list inside single long row */}
          <div className="marquee">
            {doubleTestimonials.map((t, idx) => (
              <article
                key={`${t.id}-${idx}`}
                className="min-w-[260px] max-w-xs bg-white rounded-2xl shadow-md p-4 flex flex-col justify-between"
                aria-label={`Testimonial from ${t.name}`}
              >
                <div className="flex items-start gap-3">
                  <img
                    src={t.avatar}
                    alt={`${t.name} avatar`}
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    onError={(e) =>
                      (e.target.src =
                        "https://cdn-icons-png.flaticon.com/512/149/149071.png")
                    }
                  />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">{t.name}</h4>
                    <p className="text-xs text-gray-500">{t.location}</p>
                    <div className="mt-1 flex items-center text-sm text-yellow-500" aria-hidden>
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <span key={i} className="mr-0.5">⭐</span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mt-3 line-clamp-4">
                  “{t.quote}”
                </p>

                <div className="mt-4 text-xs text-gray-400">Verified traveler</div>
              </article>
            ))}
          </div>
        </div>

        {/* Controls hint */}
        <div className="mt-4 text-sm text-gray-500">
          Hover to pause • Swipe on mobile
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
