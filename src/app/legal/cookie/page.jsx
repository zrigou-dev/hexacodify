import React from "react";

const CookiePolicy = () => {
  return (
    <div className="bg-[#1f2a45] text-white p-8 min-h-screen">
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
          1. Introduction
        </h2>
        <p className="text-lg">
          This Cookie Policy explains how we use cookies and similar tracking
          technologies on our website. By continuing to browse our site, you
          agree to the use of cookies as described in this policy.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
          2. What Are Cookies?
        </h2>
        <p className="text-lg">
          Cookies are small text files that are stored on your device when you
          visit a website. They help websites function properly, improve user
          experience, and provide valuable information for website owners.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
          3. Types of Cookies We Use
        </h2>
        <ul className="list-disc list-inside text-lg space-y-4">
          <li>
            <span className="font-bold text-yellow-300">
              Essential Cookies:
            </span>
            Necessary for website functionality.
          </li>
          <li>
            <span className="font-bold text-yellow-300">
              Performance Cookies:
            </span>
            Help us analyze website usage.
          </li>
          <li>
            <span className="font-bold text-yellow-300">
              Functional Cookies:
            </span>
            Remember user preferences and settings.
          </li>
          <li>
            <span className="font-bold text-yellow-300">
              Advertising Cookies:
            </span>
            Deliver personalized advertisements.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
          4. How We Use Cookies
        </h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>To remember your preferences and settings</li>
          <li>To analyze website traffic and usage patterns</li>
          <li>To improve website performance and user experience</li>
          <li>To deliver personalized advertisements</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
          5. Managing Cookies
        </h2>
        <p className="text-lg">
          You can control and manage cookies through your browser settings.
          Disabling cookies may affect website functionality.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
          6. Third-Party Cookies
        </h2>
        <p className="text-lg">
          We may use third-party cookies for analytics and advertising purposes.
          These are governed by third-party privacy policies.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
          7. Updates to This Cookie Policy
        </h2>
        <p className="text-lg">
          We may update this Cookie Policy periodically. Please check back for
          updates.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
          8. Contact Us
        </h2>
        <p className="text-lg mb-4">
          If you have any questions or concerns about this Cookie Policy, please
          contact us at:
        </p>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>
            <span className="font-bold text-yellow-300">Email:</span> [Insert
            Email Address]
          </li>
          <li>
            <span className="font-bold text-yellow-300">Phone:</span> [Insert
            Phone Number]
          </li>
          <li>
            <span className="font-bold text-yellow-300">Address:</span> [Insert
            Physical Address]
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CookiePolicy;
