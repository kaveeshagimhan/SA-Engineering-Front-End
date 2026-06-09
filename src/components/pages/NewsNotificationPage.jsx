import React from "react";
import { Layout } from "../common";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const NewsNotificationPage = () => {
  const newsData = [
    {
      title: "Seven New Coastal Parks for Puttalam",
      date: "October, 2025",
      description:
        "Under the Clean Sri Lanka Program, construction began on the first of seven small coastal parks planned for the Puttalam District. The inaugural site, located near the Kurusa Church in Marawila, was officially launched on October 4. This initiative is part of a broader national project to establish 100 coastal parks across the country. The launch event was organized by the Department of Coast Conservation and attended by Deputy Minister of Environment Anton Jayakody, along with local MPs and officials. These new parks will be developed in areas including Kalpitiya, Puttalam, Marawila, and Chilaw to enhance coastal preservation and promote eco-tourism.",
      images: [
        "/images/news/news1_1.jpg",
        "/images/news/news1_2.jpg",
        "/images/news/news1_3.jpg",
      ],
    },
    {
      title: "SA Engineering Receives Safety Award",
      date: "August 14, 2025",
      description:
        "Our company was recognized for outstanding safety management in infrastructure projects by the National Construction Authority.",
      images: [
        "/images/news/news2_1.jpg",
        "/images/news/news2_2.jpg",
        "/images/news/news2_3.jpg",
      ],
    },
    {
      title: "Upcoming Engineering Conference 2025",
      date: "July 05, 2025",
      description:
        "Join industry experts at the annual SA Engineering Conference to explore innovations in civil, electrical, and environmental engineering sectors.",
      images: [
        "/images/news/news3_1.jpg",
        "/images/news/news3_2.jpg",
        "/images/news/news3_3.jpg",
      ],
    },
    
  ];

  return (
    <Layout pageTitle="News & Notifications">
      {/* Hero Banner Section */}
      <section
        className="relative bg-cover bg-center h-[100vh] flex items-center justify-center"
        style={{ backgroundImage: "url('/images/news/news1_1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-55"></div>
        <div className="relative z-10 text-center px-10">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-md">
            News &amp; Notifications
          </h1>
          <p className="text-2xl text-white drop-shadow-md max-w-4xl mx-auto">
            Stay up to date with the latest projects, achievements, and announcements from SA Engineering.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">
          Latest News & Updates
        </h2>

        {/* News Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsData.map((news, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Image Slider */}
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 2000, // 🔁 2 seconds
                  disableOnInteraction: false, // keeps autoplay after user interaction
                }}
                loop={true}
                className="w-full h-56"
              >
                {news.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`Slide ${idx}`}
                      className="w-full h-56 object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Text Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{news.date}</p>
                <p className="text-gray-600 text-justify">{news.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default NewsNotificationPage;
