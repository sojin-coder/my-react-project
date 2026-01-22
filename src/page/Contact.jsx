import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import LocationHub from "../components/LocationHub";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: <Phone size={24} />,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    color:
      "bg-[linear-gradient(90deg,rgba(33,26,232,1)_30%,rgba(40,125,235,1)_63%)]",
  },
  {
    icon: <Mail size={24} />,
    title: "Email",
    details: ["info@company.com", "support@company.com"],
    color:
      "bg-[linear-gradient(90deg,rgba(235,103,103,1)_13%,rgba(235,21,21,1)_90%)]",
  },
  {
    icon: <MapPin size={24} />,
    title: "Office",
    details: ["123 Business Street", "New York, NY 10001"],
    color:
      "bg-[linear-gradient(90deg,rgba(245,65,20,1)_13%,rgba(235,21,21,1)_90%)]",
  },
  {
    icon: <Clock size={24} />,
    title: "Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat - Sun: Closed"],
    color:
      "bg-[linear-gradient(90deg,rgba(238,245,20,1)_13%,rgba(21,235,21,1)_90%)]",
  },
];

const ContactPage = () => {
  const formRef = useRef();

       const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l4eqtus",     // Service ID របស់អ្នក
        "template_xc4pqv9",    // 🟢 ប្តូរមកដាក់ ID ថ្មីនេះ
        formRef.current,
        "wU6Jn3ZB7dvgqh5Vv"      // 🔴 កុំភ្លេចប្តូរយក Public Key មកដាក់ដែរ
      )
      .then(() => {
        alert("Message sent successfully ✅");
        formRef.current.reset();
      })
      .catch((error) => {
        alert("Failed ❌ " + error.text);
      });
  };
  

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-gray-300 w-[90%] rounded-2xl shadow-2xl pt-1 mt-10 mx-auto">

        {/* HERO */}
        <div className="relative mx-auto w-[95%] h-[500px] mt-10 rounded-3xl overflow-hidden shadow-2xl bg-[url('https://etec-elearning.vercel.app/assets/2-m2xJnEZj.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-white text-5xl md:text-6xl font-extrabold mb-4">
              Get In Touch
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((card, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:-translate-y-2 transition"
              >
                <div className={`${card.color} text-white p-3 rounded-xl mb-4`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                {card.details.map((text, idx) => (
                  <p key={idx} className="text-gray-500 text-sm">
                    {text}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* FORM */}
        <div className="max-w-7xl mx-auto px-6 mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl">
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>

              <form
                ref={formRef}
                onSubmit={sendEmail}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    name="name"
                    placeholder="Full Name"
                    required
                    className="input"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    className="input"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    name="phone"
                    placeholder="Phone"
                    className="input"
                  />
                  <input
                    name="title"
                    placeholder="Subject"
                    required
                    className="input"
                  />
                </div>

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Message"
                  required
                  className="input resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-500 to-blue-700 text-white font-bold py-4 rounded-xl flex justify-center items-center gap-2"
                >
                  <Send size={18} /> Send Message
                </button>
              </form>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-xl">
              <h2 className="text-3xl font-bold mb-6">FAQs</h2>
              <p className="text-gray-600">Response within 24 hours.</p>
            </div>

          </div>
        </div>

        <div className="w-[80%] mx-auto mt-10">
          <LocationHub />
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
