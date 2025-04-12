import { FaRegClock, FaRegComment } from "react-icons/fa";

export default function BlogSEOPage() {
  return (
    <section className="bg-gradient-to-r from-[#2a3d66] to-[#1f2a45] py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Blog Header */}
        <h1
          className="text-4xl sm:text-5xl font-bold text-yellow-400 text-center mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          SEO Strategies to Boost Your Website's Rank in 2025
        </h1>
        <div className="text-gray-400 text-center mb-6">
          <FaRegClock className="inline-block mr-2" />
          <span>7 min read</span>
          <div className="inline-block mx-4">|</div>
          <FaRegComment className="inline-block mr-2" />
          <span>20 Comments</span>
        </div>

        {/* Blog Content */}
        <article className="text-white text-lg leading-relaxed">
          <p className="mb-6">
            Search Engine Optimization (SEO) continues to play a pivotal role in
            driving traffic and improving website visibility. In 2025, SEO is
            set to become more sophisticated as search engines prioritize user
            experience and high-quality content. This article outlines essential
            strategies to boost your website's rank.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            1. Optimize for Core Web Vitals
          </h2>
          <p className="mb-6">
            Core Web Vitals have become key ranking factors. Focus on optimizing
            page load speed, interactivity, and visual stability to provide
            users with a seamless experience.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            2. Create High-Quality, Relevant Content
          </h2>
          <p className="mb-6">
            Content remains king. Create valuable and engaging content that
            meets user intent and keeps readers coming back. Use proper keywords
            naturally within the content.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            3. Focus on Mobile Optimization
          </h2>
          <p className="mb-6">
            Ensure your website is fully optimized for mobile devices.
            Responsive design and fast mobile page load speeds are essential for
            better rankings.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            4. Leverage Voice Search Optimization
          </h2>
          <p className="mb-6">
            With the rise of voice-activated devices, optimize your content for
            voice search by targeting conversational keywords and providing
            direct answers.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            5. Build Quality Backlinks
          </h2>
          <p className="mb-6">
            Earning high-quality backlinks from authoritative websites is still
            a crucial SEO factor. Focus on creating shareable content and
            collaborating with industry influencers.
          </p>

          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            Conclusion
          </h2>
          <p className="mb-6">
            Staying on top of the latest SEO strategies will give your website a
            competitive edge in 2025. By focusing on user experience,
            high-quality content, and technical optimization, you'll be
            well-positioned to achieve higher rankings and increased traffic.
          </p>
        </article>
      </div>
    </section>
  );
}
