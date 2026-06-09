import React, { useState } from "react";
import { Layout } from "../common";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactCards = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Head Office",
      lines: ["123 Main Street,", "Colombo, Sri Lanka"],
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Service Centers",
      lines: [
        "S A Engineering, Hakmana, Matara.",
        "S A Engineering, Madampe, Chilaw.",
      ],
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone",
      lines: ["(+94) 11 123 4567", "(+94) 11 987 6543"],
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      lines: ["info@saholdings.lk", "service@saholdings.lk"],
    },
  ];

  return (
    <Layout pageTitle="Contact Us">
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] min-h-[450px]">
        <img
          src="/images/project/project1_1.jpg"
          alt="Contact Us"
          className="w-full h-full object-cover brightness-40"
          style={{ filter: "brightness(0.4)" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center pt-32">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg tracking-wide">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-orange-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg md:text-xl font-light opacity-90 max-w-xl">
            We'd love to hear from you. Reach out to us for any inquiries or project discussions.
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                {card.icon}
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-3">{card.title}</h3>
              {card.lines.map((line, j) => (
                <p key={j} className="text-gray-500 text-sm leading-relaxed">{line}</p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Form + Map Section */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Contact Form */}
          <div className="lg:w-1/2">
            <p className="text-red-600 font-bold tracking-widest uppercase text-sm mb-2">Get In Touch</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              Send Us a Message
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>

            {submitted && (
              <div className="mb-6 flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 px-5 py-4 rounded-xl">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold">Thank you! Your message has been sent successfully.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent bg-gray-50 text-gray-800 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent bg-gray-50 text-gray-800 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+94 77 123 4567"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent bg-gray-50 text-gray-800 transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent bg-gray-50 text-gray-800 transition"
                  >
                    <option value="">Select a subject</option>
                    <option value="Construction">Construction Project</option>
                    <option value="Boiler">Boiler Systems</option>
                    <option value="Swimming Pool">Swimming Pools & Spas</option>
                    <option value="Waste Water">Waste-Water Treatment</option>
                    <option value="Automation">Machinery Automation</option>
                    <option value="Industrial">Industrial Equipment</option>
                    <option value="General">General Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent bg-gray-50 text-gray-800 transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send Message
              </button>
            </form>
          </div>

          {/* Map + Social */}
          <div className="lg:w-1/2 flex flex-col gap-8">
            {/* Map */}
            <div>
              <p className="text-red-600 font-bold tracking-widest uppercase text-sm mb-2">Find Us</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Our Location</h2>
              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-72">
                <iframe
                  title="SA Engineering Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467128568!2d79.85005!3d6.921944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593c3bffffff%3A0x5e4b4b5e5e5e5e5e!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2slk!4v1617000000000!5m2!1sen!2slk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center text-red-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-800 text-xl">Business Hours</h3>
              </div>
              <div className="space-y-3">
                {[
                  { day: "Monday – Friday", hours: "8:00 AM – 5:30 PM" },
                  { day: "Saturday", hours: "8:00 AM – 1:00 PM" },
                  { day: "Sunday & Public Holidays", hours: "Closed" },
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-0">
                    <span className="text-gray-600 font-medium text-sm">{row.day}</span>
                    <span className={`font-semibold text-sm ${row.hours === "Closed" ? "text-red-500" : "text-gray-800"}`}>
                      {row.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-900 rounded-2xl p-7 text-white">
              <h3 className="font-bold text-xl mb-2">Follow Us</h3>
              <p className="text-gray-400 text-sm mb-5">Stay updated with our latest projects and news.</p>
              <div className="flex gap-4">
                {[
                  { href: "#facebook", img: "/src/assets/face.png", label: "Facebook" },
                  { href: "#linkedin", img: "/src/assets/linked.png", label: "LinkedIn" },
                  { href: "#instagram", img: "/src/assets/insta.png", label: "Instagram" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    className="w-12 h-12 bg-white/10 hover:bg-red-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                    title={s.label}
                  >
                    <img src={s.img} alt={s.label} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default ContactUsPage;
