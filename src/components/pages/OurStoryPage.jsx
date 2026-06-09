import React, { useEffect, useState } from 'react'
import { Layout } from '../common'

const OurStoryPage = () => {
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 200) // Simple fade-in effect
  }, [])

  return (
    <Layout pageTitle="About Us">
      {/* HERO Section */}
      <section 
        className="relative bg-cover bg-center h-[100vh] flex items-center justify-center"
        style={{ backgroundImage: "url('src/assets/EngService/about1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-10">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-md">
            About Us
          </h1>
          <p className="text-4xl text-white drop-shadow-md max-w-5xl mx-auto">
            Savinda Echo Holdings (Pvt) Ltd, through its subsidiary S A Engineering, delivers innovative, sustainable, and high-quality engineering solutions across multiple sectors in Sri Lanka.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className={`py-24 px-6 text-center transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">Our Story & Vision</h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-8 leading-relaxed">
          Founded with a commitment to excellence, Savinda Echo Holdings focuses on providing high-value, sustainable engineering solutions while minimizing environmental impact. With a proven track record in boilers, water treatment, waste-water management, automation, and civil engineering, we transform complex challenges into innovative, reliable solutions. Our mission is to create long-term value for our clients while delivering projects on time, within budget, and with unmatched quality.
        </p>

        {/* Milestones / Achievements */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Boilers & Thermal Solutions</h3>
            <p className="text-gray-600">
              Full-service solutions from installation to maintenance for industrial boilers, thermic heaters, and hot water generators.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Water Treatment Systems</h3>
            <p className="text-gray-600">
              Expertise in softeners, reverse osmosis, desalination, and brackish water filtering to ensure sustainable water solutions.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2 duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Waste-Water Treatment</h3>
            <p className="text-gray-600">
              Efficient effluent and sewage treatment systems designed to minimize environmental impact and maximize operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`bg-gray-200 py-24 px-6 transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-4xl font-semibold text-gray-800 mb-12 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-gray-600">We deliver products and services that meet the highest standards worldwide.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600">We apply modern technologies to provide sustainable and efficient solutions.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p className="text-gray-600">Low-carbon operations and efficient resource management are at the heart of our work.</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-2">Client Focus</h3>
            <p className="text-gray-600">We provide tailored solutions that minimize risk and maximize value for our clients.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`py-24 px-6 text-center transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-4xl font-semibold text-gray-800 mb-4">Partner With Us</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          Transform your vision into reality with Savinda Echo Holdings’ expertise in engineering and consultancy. Our solutions are designed to be innovative, efficient, and sustainable.
        </p>
        <a 
          href="mailto:info@saholdings.lk" 
          className="inline-block bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-medium hover:bg-blue-700 transition duration-300"
        >
          Contact Us Today
        </a>
      </section>
    </Layout>
  )
}

export default OurStoryPage
