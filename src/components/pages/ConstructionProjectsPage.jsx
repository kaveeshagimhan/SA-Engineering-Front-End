import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../common";
import { projectsData } from "../../data/projectsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ConstructionProjectsPage = () => {

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
          <div key={index} className="flex flex-col group cursor-pointer">
            <Link to={`/projects/${project.id}`} className="block">
              <div
                className={`flex flex-col md:flex-row ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } items-center gap-8 bg-white rounded-2xl shadow-md group-hover:shadow-2xl transition-all duration-300 overflow-hidden transform group-hover:-translate-y-1`}
              >
                {/* Image Slider Section */}
                <div className="md:w-1/2 w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <span className="bg-white text-gray-900 px-6 py-2 rounded-full font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Details
                    </span>
                  </div>
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
                          alt={`${project.title} slide ${idx}`}
                          className="w-full h-72 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Text Section */}
                <div className="md:w-1/2 w-full p-6 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-md font-medium">
                      {project.date}
                    </span>
                    <span className="text-sm text-gray-500 font-medium">{project.location}</span>
                  </div>
                  <p className="text-gray-600 text-justify leading-relaxed text-lg">
                    {project.shortDescription}
                  </p>
                  
                  <div className="mt-6 flex items-center text-orange-600 font-semibold group-hover:gap-2 transition-all">
                    <span>Learn more</span>
                    <svg className="w-5 h-5 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ConstructionProjectsPage;
