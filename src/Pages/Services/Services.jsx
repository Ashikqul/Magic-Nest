'use client';

import { useState } from 'react';

// Importing images
import webDesignImg from '../../assets/services-1.jpg';
import uiuxDesignImg from '../../assets/original-02ba5784a29957e303a3a47917edfe7b.jpg';
import mobileAppImg from '../../assets/services-3.jpg';
import userResearchImg from '../../assets/services-4.jpg';
import seoImg from '../../assets/seo.jpg';
import socialMediaImg from '../../assets/social-media.jpg';
import landingPageImg from '../../assets/landing-page.jpg';
import analyticsImg from '../../assets/analytics.jpg';

// All Services
const services = [
  {
    title: 'Responsive Web Design',
    content:
      'Crafting responsive and mobile-first websites with clean layouts, ensuring fast load times, cross-browser compatibility, and seamless user experience across all devices.',
    hasImage: true,
    img: webDesignImg,
  },
  {
    title: 'UI/UX Implementation',
    content:
      'Translating design concepts into interactive, pixel-perfect UI using modern frontend tools. Focused on user-friendly interfaces, accessibility, and design consistency.',
    hasImage: true,
    img: uiuxDesignImg,
  },
  {
    title: 'Frontend Development',
    content:
      'Building scalable frontend applications with React.js, Tailwind CSS, and modern frameworks. Emphasis on performance, code reusability, and modular architecture.',
    hasImage: true,
    img: mobileAppImg,
  },
  {
    title: 'User  Interaction & Research',
    content:
      'Utilizing analytics and usability testing to improve UI decisions. Creating intuitive flows, minimizing user friction, and aligning frontend behavior with user needs.',
    hasImage: true,
    img: userResearchImg,
  },
  {
    title: 'SEO Optimization',
    content:
      'Optimizing websites for search engines with on-page SEO, meta tags, image optimization, and structured data to improve visibility and organic traffic.',
    hasImage: true,
    img: seoImg,
  },
  {
    title: 'Social Media Content Strategy',
    content:
      'Creating targeted content strategies for platforms like Facebook, Instagram, and YouTube that align with brand goals, drive engagement, and increase reach.',
    hasImage: true,
    img: socialMediaImg,
  },
  {
    title: 'Landing Page Optimization',
    content:
      'Designing high-converting landing pages using persuasive UI, A/B testing, and marketing strategies to improve conversion rates and user engagement.',
    hasImage: true,
    img: landingPageImg,
  },
  {
    title: 'Performance & Analytics Monitoring',
    content:
      'Integrating tools like Google Analytics and Meta Pixel to track user behavior, monitor KPIs, and make data-driven improvements in design and marketing.',
    hasImage: true,
    img: analyticsImg,
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="services"
      className="w-full bg-gradient-to-r bg-[#100E23] text-white py-20 px-6 lg:pl-80 -mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase text-sm text-gray-400 font-semibold mb-2">My Services</h3>
        <h2 className="text-4xl font-extrabold mb-10">MY SPECIALTIES</h2>

        <div className="space-y-6">
          {services.map(({ title, content, hasImage, img }, index) => (
            <div key={index}>
              <button
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
                className={`w-full text-left text-lg font-semibold py-4 border-b border-gray-700 flex justify-between items-center transition-colors ${
                  openIndex === index ? 'text-pink-500' : 'hover:text-pink-400'
                }`}
              >
                {title}
                <span
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-45' : 'rotate-0'
                  }`}
                >
                  +
                </span>
              </button>

              {openIndex === index && (
                <div className="pl-4 pt-4 space-y-4 animate-fade-in">
                  {hasImage && img && (
                    <img
                      src={img}
                      alt={title}
                      loading="lazy"
                      className="w-full max-w-xl rounded-lg shadow-lg"
                    />
                  )}
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
