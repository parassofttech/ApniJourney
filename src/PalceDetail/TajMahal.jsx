import React from "react";

/**
 * TajMahal.jsx
 * Simple, mobile-friendly info card with photo for Taj Mahal.
 * - Place this inside src/components/
 * - Usage: import TajMahal from "./components/TajMahal";
 */

const TajMahal = () => {
  return (
    <section className="max-w-3xl mx-auto p-4">
      {/* Photo */}
      <div className="overflow-hidden rounded-2xl shadow-lg">
        <img
          // Unsplash photo for Taj Mahal (stable query-based URL)
          src="https://assets.architecturaldigest.in/photos/68aee6b6c217baca2192039c/16:9/w_1616,h_909,c_limit/Untitled%20design%20-%202025-08-27T163622.470.png"
          alt="Taj Mahal, Agra"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="mt-4 text-2xl font-extrabold text-gray-900">Taj Mahal</h1>

      {/* Short Summary */}
      <p className="mt-2 text-gray-700 text-sm leading-relaxed">
        The Taj Mahal is an ivory-white marble mausoleum located on the right
        bank of the Yamuna river in Agra, Uttar Pradesh, India. It was
        commissioned by the Mughal emperor Shah Jahan in 1631 in memory of his
        wife Mumtaz Mahal. The complex was mostly completed in the mid-17th
        century and is widely regarded as a masterpiece of Mughal architecture.
      </p>

      {/* Key facts grid */}
      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <strong className="block text-gray-800">Location</strong>
          <span className="text-gray-600">Agra, Uttar Pradesh, India</span>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <strong className="block text-gray-800">Built</strong>
          <span className="text-gray-600">c. 1631–1653 (17th century)</span>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <strong className="block text-gray-800">Built for</strong>
          <span className="text-gray-600">Mumtaz Mahal (wife of Shah Jahan)</span>
        </div>
        <div className="bg-white rounded-lg p-3 shadow-sm">
          <strong className="block text-gray-800">Style</strong>
          <span className="text-gray-600">Mughal architecture</span>
        </div>
      </div>

      {/* More info and link */}
      <div className="mt-4 text-sm text-gray-600 space-y-2">
        <p>
          The complex includes the main mausoleum, a large charbagh (formal
          garden), a mosque, and other auxiliary buildings. The white marble
          was sourced from Makrana (Rajasthan) and the site is famous for its
          symmetry and intricate inlay work.
        </p>

        <p>
          For official description and UNESCO listing, visit the UNESCO page
          (link below).
        </p>

        <a
          className="inline-block mt-2 text-blue-600 underline"
          href="https://whc.unesco.org/en/list/252"
          target="_blank"
          rel="noreferrer"
        >
          Read more on UNESCO
        </a>
        <br />
      </div>
       <br /> <br /> <br /> 
    </section>
  );
};

export default TajMahal;
