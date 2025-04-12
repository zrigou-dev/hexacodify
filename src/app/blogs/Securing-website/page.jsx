import { FaRegClock, FaRegComment } from "react-icons/fa";

export default function WebsiteSecurityBestPracticesBlog() {
  return (
    <section className="bg-gradient-to-r from-[#2a3d66] to-[#1f2a45] py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Blog Header */}
        <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400 text-center mb-10">
          Securing Your Website: Best Practices for 2025
        </h1>
        <div className="text-gray-400 text-center mb-6">
          <FaRegClock className="inline-block mr-2" />
          <span>10 min read</span>
          <div className="inline-block mx-4">|</div>
          <FaRegComment className="inline-block mr-2" />
          <span>15 Comments</span>
        </div>

        {/* Blog Content */}
        <article className="text-white text-lg leading-relaxed">
          <p className="mb-6">
            As cyber threats continue to evolve, securing your website has never
            been more critical. In 2025, businesses must adopt advanced security
            measures to protect sensitive data and maintain user trust. This
            article explores best practices to help you safeguard your website
            against potential threats.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            1. Enable HTTPS and SSL Certificates
          </h2>
          <p className="mb-6">
            Secure your website by enabling HTTPS and obtaining an SSL
            certificate. This encryption protects data transmitted between your
            site and users, preventing unauthorized access and data breaches.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            2. Regular Software Updates
          </h2>
          <p className="mb-6">
            Keep your website's software, plugins, and frameworks updated to
            patch vulnerabilities. Outdated software is a common entry point for
            cybercriminals.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            3. Use Strong Authentication Methods
          </h2>
          <p className="mb-6">
            Implement multi-factor authentication (MFA) to add an extra layer of
            security. Encourage users to create strong, unique passwords and use
            password managers.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            4. Regular Security Audits
          </h2>
          <p className="mb-6">
            Conduct regular security audits to identify vulnerabilities and fix
            them proactively. Penetration testing and vulnerability scans are
            essential for a robust security strategy.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            5. Backup Your Website Regularly
          </h2>
          <p className="mb-6">
            Regular backups ensure that you can quickly restore your website in
            the event of a security breach or data loss. Store backups securely
            and test them periodically.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            6. Monitor and Detect Threats
          </h2>
          <p className="mb-6">
            Use security monitoring tools to detect and respond to suspicious
            activities in real-time. Log analysis and intrusion detection
            systems can help identify potential threats early.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            Conclusion
          </h2>
          <p className="mb-6">
            Securing your website in 2025 requires a proactive approach and the
            adoption of best practices. By implementing these security measures,
            you can protect your business, users, and data from evolving cyber
            threats. Prioritize security and stay vigilant to maintain a safe
            online presence.
          </p>
        </article>
      </div>
    </section>
  );
}
