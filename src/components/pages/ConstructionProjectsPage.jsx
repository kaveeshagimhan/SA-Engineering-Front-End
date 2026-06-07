import React from "react";
import { Layout } from "../common";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ConstructionProjectsPage = () => {
  const projectsData = [
    {
      title: "Udappuwa Project",
      date: "Ongoing",
      description:
        "A state-of-the-art wedding hall project located in Udappuwa, designed to host elegant events and ceremonies.",
      images: [
        "/images/project/Udappuwa site/20260521_165542.jpg.jpeg",
      ],
    },
    {
      title: "Chilaw Project",
      date: "Ongoing",
      description:
        "A modern residential apartment complex situated in Chilaw, offering premium living spaces with high-quality finishes.",
      images: [
        "/images/project/Chilaw site/20260521_155054.jpg.jpeg",
      ],
    },
    {
      title: "Madurankuliya Project",
      date: "Ongoing",
      description:
        "A commercial chicken farm facility in Madurankuliya, built with advanced structural designs for sustainable poultry farming.",
      images: [
        "/images/project/Madurankuliya site/20260521_175004.jpg.jpeg",
      ],
    },
  ];

  return (
    <Layout pageTitle="Construction Projects">
      {/* Banner Section */}
      <div className="flex items-center justify-center h-64 bg-gradient-to-r from-orange-700 to-yellow-500 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Construction Projects</h1>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 space-y-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">
          Ongoing & Completed Projects
        </h2>

        {projectsData.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden`}
          >
            {/* Image Slider Section */}
            <div className="md:w-1/2 w-full">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                loop={true}
                className="w-full h-72 md:h-96"
              >
                {project.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      //alt={`Slide ${idx}`}
                      className="w-full h-72 md:h-96 object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 w-full p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{project.date}</p>
              <p className="text-gray-600 text-justify leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ConstructionProjectsPage;
