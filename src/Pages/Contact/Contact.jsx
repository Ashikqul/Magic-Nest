import { motion } from 'framer-motion';
import { Link } from 'react-router';

const Contact = () => {
  return (
    <div id='contact' className="bg-[#0f0f1b] text-white min-h-screen p-8 px-6 lg:pl-80 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Contact Info */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold uppercase">Contact</h2>
          <h3 className="text-4xl font-extrabold">REACH OUT ME</h3>

          <div className="space-y-4">
            <div className="bg-[#1a1a2e] p-4 rounded-lg flex items-center gap-4">
              <span className="text-pink-500 text-2xl">💬</span>
              <div>
                <p className="font-bold">Chat to us</p>
                <p className="text-gray-400">Our friendly team is here: help@domainname.com</p>
              </div>
            </div>

            <div className="bg-[#1a1a2e] p-4 rounded-lg flex items-center gap-4">
              <span className="text-pink-500 text-2xl">📍</span>
              <div>
                <p className="font-bold">Visit us</p>
                <p className="text-gray-400">Come say hello at our office HQ, Womana Park Street, NY</p>
              </div>
            </div>

            <div className="bg-[#1a1a2e] p-4 rounded-lg flex items-center gap-4">
              <span className="text-pink-500 text-2xl">📞</span>
              <div>
                <p className="font-bold">Call us</p>
                <p className="text-gray-400">Mon-Fri 8am to 5pm, +65 (555) 000-0000</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded overflow-hidden">
            <iframe
              className="w-full h-48 border-0"
              src="https://maps.google.com/maps?q=Empire%20State%20Building&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>

        {/* Right Section - Form */}
        <motion.div
          className="bg-gradient-to-br from-pink-600 to-purple-700 p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-2">Got Ideas? We have got the skills. Let's team up.</h3>
          <p className="text-sm text-white/80 mb-6">Tell us more about yourself and what you’ve got in mind.</p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name*"
                className="p-3 rounded bg-white text-black w-full"
                required
              />
              <input
                type="email"
                placeholder="Email*"
                className="p-3 rounded bg-white text-black w-full"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject*"
              className="p-3 rounded bg-white text-black w-full"
              required
            />
            <textarea
              rows="5"
              placeholder="Your message*"
              className="p-3 rounded bg-white text-black w-full"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white py-3 px-6 rounded hover:bg-white hover:text-black transition-all font-semibold"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* Footer */}
     <footer className="mt-12 text-gray-400 text-sm flex justify-between items-center px-4 flex-wrap">
  <p>
    <span className="text-pink-500 font-semibold">Liam Williamson</span>
  </p>
  <p>&copy; 2025. All rights reserved.</p>
</footer>

    </div>
  );
};

export default Contact;
