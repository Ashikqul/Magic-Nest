import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import frontendImg from "../../assets/frontend.jpg";
import seoImg from "../../assets/seo-strateg.jpg";
import marketingImg from "../../assets/marketing.jpg";
import jsImg from "../../assets/js.jpg";

const blogData = [
  {
    id: 1,
    date: "08 August, 2025",
    title: "Mastering Frontend Development in 2025",
    image: frontendImg,
    content:
      "Frontend development is evolving rapidly. In 2025, developers are focusing on performance, accessibility, and beautiful UI/UX using frameworks like React, Vue, and Svelte. Mastering Tailwind CSS, React ecosystem (Router, Redux, Framer Motion) and accessibility best practices is essential. Learn how to build fast, responsive, and interactive interfaces that impress users and clients alike.",
  },
  {
    id: 2,
    date: "08 August, 2025",
    title: "SEO Strategies That Actually Work",
    image: seoImg,
    content:
      "Search Engine Optimization (SEO) has become smarter in 2025. Google now focuses more on content quality, user engagement, and page speed. Learn how to do keyword research properly, structure your content, optimize meta tags, use schema markup, and build quality backlinks. This blog shares the latest SEO practices that will help your website rank higher and attract organic traffic consistently.",
  },
  {
    id: 3,
    date: "08 August, 2025",
    title: "Boost Your Brand with Digital Marketing",
    image: marketingImg,
    content:
      "Digital marketing combines content, social media, email, and ads to grow businesses online. This year, short-form video, personalization, and AI-based analytics are dominating. Learn how to craft a digital strategy, use tools like Google Ads, Meta Business Suite, Mailchimp, and create brand awareness through storytelling, targeted ads, and community engagement.",
  },
  {
    id: 4,
    date: "08 August, 2025",
    title: "Why JavaScript is Still the King",
    image: jsImg,
    content:
      "JavaScript remains the backbone of the web. Whether you're building dynamic UIs, serverless apps with Node.js, or full-stack solutions with Next.js – JavaScript does it all. In this blog, explore how to use modern JavaScript features like async/await, modules, ES6+, and understand the event loop. We also discuss best practices for writing clean, maintainable JS code in modern projects.",
  },
];

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Scroll block when modal is open
  useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup on unmount or change
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedBlog]);

  return (
    <div id= 'blog'  className="scroll-mt-28 bg-[#0B0922] text-white px-6 lg:pl-80 py-20">
      <strong><p className="text-fuchsia-500 uppercase mb-2 italic">Our Blogs</p></strong>
      <h2 className="text-3xl md:text-4xl font-bold mb-10">OUR LATEST UPDATE</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {blogData.map((blog) => (
          <motion.div
            key={blog.id}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedBlog(blog)}
            className="bg-[#1a1a2e] rounded-lg overflow-hidden shadow-lg cursor-pointer py-10"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-400 text-sm mb-1">{blog.date}</p>
              <h3 className="font-semibold text-lg">{blog.title}</h3>
              <p className="text-sm text-fuchsia-400 mt-2">Click to read more...</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0  bg-opacity-50 backdrop-blur-sm flex justify-center items-center p-4 z-[9999]"
            onClick={() => setSelectedBlog(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#1a1a2e] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto p-6 relative"
            >
              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full object-contain max-h-[40vh] rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{selectedBlog.title}</h2>
              <p className="text-sm text-gray-400 mb-4">{selectedBlog.date}</p>
              <p className="text-gray-200 text-sm leading-relaxed">{selectedBlog.content}</p>
              <button
                onClick={() => setSelectedBlog(null)}
                className="mt-6 text-fuchsia-400 hover:text-fuchsia-200 underline"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;
