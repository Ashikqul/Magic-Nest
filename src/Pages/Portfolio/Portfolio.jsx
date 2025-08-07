import React from 'react';
import { motion } from 'framer-motion';
import { FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';  // JavaScript icon
import project1 from '../../assets/premium_photo-1682090260563-191f8160ca48.jpg';
import project2 from '../../assets/services-2.jpg';
import project3 from '../../assets/Lootcrate_logo.png';
import project4 from '../../assets/1200x630wa.png';

const projects = [
  {
    img: project1,
    title: 'ProFast',
    link: 'https://effulgent-babka-3f92ed.netlify.app/',
    type: 'React',
  },
  {
    img: project2,
    title: 'Gym Base',
    link: 'https://gym-base-client.vercel.app/',
    type: 'React',
  },
  {
    img: project3,
    title: 'Loot Crate',
    link: 'https://glittery-peony-a4ed9b.netlify.app/',
    type: 'React',
  },
  {
    img: project4,
    title: 'English Is Easy',
    link: 'https://singular-chaja-c06434.netlify.app/',
    type: 'JS',  // এখানে JS প্রজেক্ট
  },
];

const cardVariants = {
  offscreenLeft: { x: -100, opacity: 0 },
  offscreenRight: { x: 100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', bounce: 0.3, duration: 0.8 },
  },
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="scroll-mt-28 bg-[#0B0922] text-white px-6 lg:pl-80 py-20">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase text-sm text-gray-300 font-semibold mb-2"><strong>My Work</strong></h3>
        <h2 className="text-4xl font-extrabold mb-10">RECENT PROJECT</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((proj, idx) => {
            // light pink background for cards
            const bgStyle = {
              background:
                'linear-gradient(135deg, rgba(193, 86, 150, 0.2) 0%, rgba(193, 86, 150, 0.1) 100%)',
            };

            const isJS = proj.type === 'JS';

            return (
              <motion.a
                key={idx}
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg overflow-hidden shadow-lg cursor-pointer block"
                style={bgStyle}
                initial={idx % 2 === 0 ? 'offscreenLeft' : 'offscreenRight'}
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.6 }}
                variants={cardVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(255, 0, 150, 0.4)' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img src={proj.img} alt={proj.title} className="w-full h-44 object-cover" />
                <div className="p-4 flex flex-col justify-between h-[140px]">
                  <div>
                    <p className={`text-xs uppercase mb-1 ${isJS ? 'text-yellow-400' : 'text-pink-500'}`}>
                      {isJS ? 'JS Project' : 'React Project'}
                    </p>
                    <h3 className={`text-xl font-semibold ${isJS ? 'text-white' : ''}`}>
                      {proj.title}
                    </h3>
                  </div>
                  <div className="mt-4 text-2xl" style={{ color: isJS ? '#f7df1e' : '#61dafb' }}>
                    {isJS ? <SiJavascript /> : <FaReact />}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
