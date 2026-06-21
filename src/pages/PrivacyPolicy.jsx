import React from "react";
import { Shield, Lock, Database, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-10 text-center">
          <Shield size={60} className="mx-auto mb-4" />
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-3 text-blue-100">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12 space-y-10">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We may collect personal information such as your name, email
              address, travel preferences, booking details, uploaded trip
              photos, and other information you voluntarily provide while using
              our platform.
            </p>
          </section>

          <section>
            <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-800 mb-3">
              <Database className="text-blue-600" />
              2. How We Use Your Information
            </h2>

            <ul className="space-y-2 text-gray-600 list-disc pl-6">
              <li>To provide and improve our travel services.</li>
              <li>To personalize your travel experience.</li>
              <li>To manage bookings and trip information.</li>
              <li>To communicate updates, offers, and notifications.</li>
              <li>To ensure security and prevent fraudulent activities.</li>
            </ul>
          </section>

          <section>
            <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-800 mb-3">
              <Lock className="text-green-600" />
              3. Data Security
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We implement industry-standard security measures to protect your
              personal information. However, no online platform can guarantee
              absolute security, and users should take precautions when sharing
              sensitive information online.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              4. Cookies & Tracking Technologies
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We may use cookies and similar technologies to enhance user
              experience, analyze website traffic, and remember user
              preferences. You can disable cookies through your browser
              settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              5. Third-Party Services
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Our website may integrate third-party services such as payment
              gateways, analytics tools, maps, and weather services. These
              services may collect information according to their own privacy
              policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              6. User Rights
            </h2>

            <ul className="space-y-2 text-gray-600 list-disc pl-6">
              <li>Access your personal information.</li>
              <li>Request corrections or updates.</li>
              <li>Request deletion of your data.</li>
              <li>Withdraw consent where applicable.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              7. Changes to This Privacy Policy
            </h2>

            <p className="text-gray-600 leading-relaxed">
              We reserve the right to update this Privacy Policy at any time.
              Changes will be posted on this page with an updated effective
              date.
            </p>
          </section>

          <section className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-800 mb-3">
              <Mail className="text-blue-600" />
              Contact Us
            </h2>

            <p className="text-gray-600">
              If you have any questions regarding this Privacy Policy, please
              contact us at:
            </p>

            <div className="mt-4">
              <p className="font-semibold text-gray-800">
                Email: support@apnijourney.com
              </p>
              <p className="font-semibold text-gray-800">
                Website: www.apnijourney.com
              </p>
            </div>
          </section>

          <div className="text-center text-sm text-gray-500 border-t pt-6">
            Last Updated: June 2026
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;