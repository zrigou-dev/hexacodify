import React from "react";

const Policy = () => {
  return (
    <div className="bg-[#1f2a45] text-white p-8 min-h-screen">
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
          1. Information We Collect
        </h2>
        <p className="mb-6 text-lg">
          We collect the following types of information when you visit or
          interact with our website:
        </p>
        <h3 className="text-2xl font-semibold text-yellow-300 mb-4">
          a. Personal Information
        </h3>
        <ul className="list-disc list-inside mb-6 space-y-2 text-lg">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Any other information you provide voluntarily</li>
        </ul>
        <h3 className="text-2xl font-semibold text-yellow-300 mb-4">
          b. Non-Personal Information
        </h3>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Browser type and version</li>
          <li>Device type and operating system</li>
          <li>IP address</li>
          <li>Date and time of access</li>
          <li>Pages visited and click activities</li>
          <li>Referral URLs</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>To provide and manage our services</li>
          <li>To personalize user experience</li>
          <li>To improve our website</li>
          <li>
            To send marketing communications (only with your explicit consent)
          </li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
          3. Sharing Your Information
        </h2>
        <p className="mb-6 text-lg">
          We do not sell, trade, or rent your personal information to third
          parties. However, we may share information in the following scenarios:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>
            <strong>Service Providers:</strong> We may share information with
            third-party vendors who help us operate our website and services.
          </li>
          <li>
            <strong>Legal Requirements:</strong> We may disclose your
            information if required by law or in response to legal requests.
          </li>
          <li>
            <strong>Business Transfers:</strong> In the event of a merger, sale,
            or acquisition, your information may be transferred.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
          4. Cookies and Tracking Technologies
        </h2>
        <p className="text-lg">
          Our website uses cookies and similar tracking technologies to enhance
          your experience.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
          5. Data Security
        </h2>
        <p className="text-lg">
          We take appropriate security measures to protect your information from
          unauthorized access, alteration, or destruction.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
          6. Your Rights
        </h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Access: Request access to your information.</li>
          <li>Correction: Request correction of inaccurate information.</li>
          <li>Deletion: Request deletion of your information.</li>
          <li>
            Objection: Object to processing your information for certain
            purposes.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
          7. Third-Party Links
        </h2>
        <p className="text-lg">
          Our website may contain links to third-party websites. We are not
          responsible for the privacy practices of these websites.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
          8. Children's Privacy
        </h2>
        <p className="text-lg">
          Our website is not intended for children under the age of 13.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
          9. Changes to This Privacy Policy
        </h2>
        <p className="text-lg">
          We may update this Privacy Policy from time to time. Any changes will
          be reflected on this page.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
          10. Contact Us
        </h2>
        <p className="text-lg mb-4">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
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
    </div>
  );
};

export default Policy;
