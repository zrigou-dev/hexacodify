import React from "react";

const TermsOfService = () => {
  return (
    <div className="bg-[#1f2a45] text-white py-12 px-6">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">
          Terms of Service
        </h1>
        <p className="mb-4">
          Welcome to our website! These Terms of Service govern your access and
          use of our platform, which offers services in web development, mobile
          app creation, SEO improvement, and UI/UX design.
        </p>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using our services, you agree to comply with and be
            bound by these Terms of Service. If you do not agree to these terms,
            please do not use our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
            2. Services We Provide
          </h2>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>
              Web Development: Creating custom websites tailored to your
              business needs.
            </li>
            <li>
              Mobile App Development: Building robust and user-friendly mobile
              applications.
            </li>
            <li>
              SEO Improvement: Enhancing your website's visibility and search
              engine ranking.
            </li>
            <li>
              UI/UX Design: Crafting intuitive and visually appealing user
              interfaces.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
            3. User Responsibilities
          </h2>
          <p className="mb-4">
            As a user, you agree to provide accurate information when engaging
            with our services and to use our platform responsibly. Any misuse of
            our services is prohibited.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
            4. Intellectual Property
          </h2>
          <p className="mb-4">
            All content, designs, and code on this website are the intellectual
            property of our company. You may not reproduce or distribute any
            materials without our permission.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
            5. Termination
          </h2>
          <p className="mb-4">
            We reserve the right to terminate or suspend your access to our
            services at our discretion if you violate these terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
            6. Limitation of Liability
          </h2>
          <p className="mb-4">
            We are not liable for any indirect, incidental, or consequential
            damages arising from your use of our services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
            7. Changes to Terms
          </h2>
          <p className="mb-4">
            We may update these Terms of Service from time to time. Any changes
            will be posted on this page, and your continued use of our services
            constitutes acceptance of the updated terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-yellow-400 mb-4">
            8. Contact Us
          </h2>
          <p>
            If you have any questions or concerns regarding these Terms of
            Service, please contact us at:
          </p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>
              <strong>Email:</strong> [Insert Email Address]
            </li>
            <li>
              <strong>Phone:</strong> [Insert Phone Number]
            </li>
            <li>
              <strong>Address:</strong> [Insert Physical Address]
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
};

export default TermsOfService;
