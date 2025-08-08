import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import img from "../../assets/img.jpg";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ga2ladq",     // EmailJS Service ID
        "template_8b1pkge",    // Template ID
        form.current,
        "yA60E6B0tzrmWd6Ct"    // Public Key
      )
      .then(
        (result) => {
          console.log("Email sent: ", result.text);
          Swal.fire({
            icon: "success",
            title: "Message Sent",
            text: "Thanks! Your message has been sent.",
            timer: 2500,
            showConfirmButton: false,
          });
          e.target.reset();
        },
        (error) => {
          console.error("Email send error: ", error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong! Please try again later.",
          });
        }
      );
  };

  const contactItems = [
    {
      icon: "💬",
      title: "Chat to us",
      description: "Our friendly team is here: ashikqulislamrizvi77@gmail.com",
    },
    {
      icon: "💌",
      title: "Support Center",
      description: "Message us in our inbox for 24/7 support.",
    },
    {
      icon: "📞",
      title: "Call us",
      description: "Sat–Thu 8am to 5pm (Closed Friday), +8801533789608",
    },
  ];

  return (
    <div id="contact" className="bg-[#0f0f1b] text-white min-h-screen p-6 lg:pl-80 py-20">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left: Contact Info */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold uppercase text-pink-500">Contact</h2>
            <h3 className="text-5xl font-extrabold mt-2">Reach Out to Me</h3>
            <p className="text-gray-400 mt-4">
              I'm always open to discussing new ideas or opportunities.
            </p>
          </div>

          {/* Info Cards */}
          <div className="space-y-6">
            {contactItems.map(({ icon, title, description }, index) => (
              <div
                key={index}
                className="bg-[#1f1f2e] hover:bg-[#29293d] transition p-5 rounded-xl flex items-start gap-4 shadow-md"
              >
                <span className="text-pink-500 text-3xl">{icon}</span>
                <div>
                  <p className="text-lg font-semibold">{title}</p>
                  <p className="text-sm text-gray-400">{description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Google Map */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              className="w-full h-52 md:h-64 border-0"
              src="https://maps.google.com/maps?q=Empire%20State%20Building&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              title="Google Map"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Right: Contact Form */}
        <motion.div
          className="bg-gradient-to-br from-pink-600 to-purple-700 p-8 md:p-10 rounded-2xl shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
       <h3 className="text-3xl font-bold mb-4">Have a Project in Mind? Let's Bring It to Life.</h3>
<p className="text-white/80 text-sm mb-8">
  Share your ideas, project details, or any questions you have. We're here to help build your perfect frontend solution.
</p>

           <form ref={form} onSubmit={sendEmail} className="space-y-5 max-w-xl mx-auto p-5 bg-pink-700 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name*"
          className="p-3 rounded-lg bg-[#AA2574] text-white w-full outline-none focus:ring-2 focus:ring-pink-400"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email*"
          className="p-3 rounded-lg bg-[#AA2574] text-white w-full outline-none focus:ring-2 focus:ring-pink-400"
          required
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder="Subject*"
        className="p-3 rounded-lg bg-[#AA2574] text-white w-full outline-none focus:ring-2 focus:ring-pink-400"
        required
      />
      <textarea
        name="message"
        rows="5"
        placeholder="Your Message*"
        className="p-3 rounded-lg bg-[#AA2574] text-white w-full outline-none focus:ring-2 focus:ring-pink-400"
        required
      ></textarea>
      <button
        type="submit"
        className="bg-black text-white py-3 px-8 rounded-lg hover:bg-white hover:text-black transition-all font-bold shadow-lg"
      >
        Send Message
      </button>
    </form>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-gray-400 text-sm flex justify-between items-center px-4 flex-wrap">
        <p className="flex items-center gap-2">
          <img
            src={img}
            alt="Sheikh Ashikqul Islam"
            className="w-6 h-6 rounded-full object-cover"
          />
          <span className="text-pink-500 font-semibold">
            Sheikh Ashikqul Islam
          </span>
        </p>
        <p>&copy; 2025. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
