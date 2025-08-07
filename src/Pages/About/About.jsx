import React from "react";
import { motion } from "framer-motion";
import cvFile from "../../assets/Ashikqul.pdf (1).pdf (1).pdf";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#0E0B2E] text-white pl-0 md:pl-64 px-6 py-20"
    >
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-20 flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left Side */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/3"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            alt="Ashikqul Islam"
            className="rounded-full w-48 h-48 object-cover shadow-lg mr-4"
            variants={fadeInUp}
          />
          <motion.h2
            className="mt-6 text-xl font-semibold text-pink-500 uppercase"
            variants={fadeInUp}
            custom={1}
          >
            Sheikh Ashikqul Islam
          </motion.h2>
          <motion.p
            className="text-sm text-gray-400 mt-1"
            variants={fadeInUp}
            custom={2}
          >
            Frontend Developer And Digital Marketing Expert
          </motion.p>
          <motion.a
            href={cvFile}
            download="ashikqul-cv.pdf"
            className="mt-6 inline-block bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded shadow"
            variants={fadeInUp}
            custom={3}
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="md:w-2/3 space-y-8"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.div variants={fadeInUp} custom={1}>
            <h3 className="text-xs text-gray-400 uppercase font-semibold mb-2">
              Nice to meet you!
            </h3>
            <h1 className="text-4xl font-bold tracking-tight leading-snug">
              WELCOME TO MY <span className="text-[#FF6B6B]">Magic</span>
              <span className="text-[#6960F7]">Nest</span>
            </h1>
            <p className="mt-4 text-gray-300 max-w-xl">
              Hello! I’m Ashikqul Islam Rizvi, a passionate and creative frontend
              developer. I specialize in building responsive and interactive websites
              using modern technologies like React.js, Tailwind CSS, and more.
              I love crafting user-friendly experiences and solving real-world
              problems through clean and efficient code.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 text-gray-400 text-sm"
            variants={fadeInUp}
            custom={2}
          >
            <div>
              <p>
                <strong>Phone: </strong> +8801533789608
              </p>
              <p>
                <strong>Email: </strong> ashikqulislamrizvi77@gmail.com
              </p>
            </div>
            <div>
              <p>
                <strong>Name: </strong> Sheikh Ashikqul Islam
              </p>
              <p>
                <strong>Location: </strong> Khulna, Bangladesh
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-10 text-gray-400"
            variants={fadeInUp}
            custom={3}
          >
            <div>
              <p className="text-pink-500 font-semibold text-lg">2+</p>
              <p className="uppercase text-xs tracking-wide">Years Experience</p>
            </div>
            <div>
              <p className="text-pink-500 font-semibold text-lg">35+</p>
              <p className="uppercase text-xs tracking-wide">Projects Completed</p>
            </div>
          </motion.div>

          <motion.blockquote
            className="bg-[#191935] p-6 rounded shadow-md text-gray-300 italic border-l-4 border-pink-600 max-w-xl"
            variants={fadeInUp}
            custom={4}
          >
            “Clean code, responsive design, and great user experience — that's my commitment in every project.”
          </motion.blockquote>
        </motion.div>
      </div>

      {/* Experience Section */}
      <motion.div
        className="w-full bg-gradient-to-r from-[#9F246F] via-[#842262] to-[#441B45] text-white py-20 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col md:flex-row gap-16">
          <motion.div className="md:w-1/3 space-y-6" variants={fadeInUp}>
            <h3 className="uppercase tracking-wide text-xs text-gray-300 font-semibold">
              Experience
            </h3>
            <h2 className="text-3xl font-extrabold">My Experience</h2>
            <p className="text-gray-300 leading-relaxed">
              I’ve worked with real estate, beauty, and eCommerce brands, delivering
              frontend and digital marketing solutions that drive engagement and
              growth.
            </p>
          </motion.div>

          <motion.div
            className="md:w-2/3 space-y-8 text-sm md:text-base"
            variants={fadeInUp}
            custom={2}
          >
            <div>
              <p className="uppercase text-gray-400 font-semibold">2025- Present</p>
              <h4 className="font-bold">Frontend Developer (Azad Cable Network)</h4>
            </div>
            <div>
              <p className="uppercase text-gray-400 font-semibold">2021 - 2023</p>
              <h4 className="font-bold">Digital Marketing Expert - Red Network Ltd</h4>
            </div>
            <div>
              <p className="uppercase text-gray-400 font-semibold">Previous</p>
              <h4 className="font-bold">Store Assistant & Supervisor (Retail/Warehouse)</h4>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
       className="w-full bg-gradient-to-r from-[#1a1a40] via-[#5e54c6] to-[#9188ff] text-white py-20 px-6"


        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col md:flex-row gap-16">
          <motion.div className="md:w-1/3 space-y-6" variants={fadeInUp}>
            <h3 className="uppercase tracking-wide text-xs text-gray-300 font-semibold">
              Education
            </h3>
            <h2 className="text-3xl font-extrabold">My Education</h2>
            <p className="text-gray-300 leading-relaxed">
              Formal education and courses that have shaped my skills and career.
            </p>
          </motion.div>

          <motion.div
            className="md:w-2/3 space-y-8 text-sm md:text-base"
            variants={fadeInUp}
            custom={2}
          >
            <div>
              <p className="uppercase text-gray-400 font-semibold">2016 - 2020</p>
              <h4 className="font-bold">B.S.S in Govt. Hazi Muhammad Mohsin College</h4>
              <h4>Khulna Bangladesh</h4>
            </div>
           <div>
  <p className="uppercase text-gray-400 font-semibold">2024-2025</p>
  <h4 className="font-bold">Web Development Course - Programming Hero</h4>
</div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
