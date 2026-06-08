import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "../common";
import { projectsData } from "../../data/projectsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <Layout pageTitle="Project Not Found">
        <div className="flex flex-col items-center justify-center h-96 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Project Not Found</h2>
          <p className="text-gray-600 mb-8">The project you are looking for does not exist.</p>
          <Link to="/projects" className="bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition">
            Back to Projects
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout pageTitle={project.title}>
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] min-h-[450px]">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6 text-center pt-32">
          <span className="bg-orange-600 px-3 py-1 rounded-full text-sm font-semibold mb-4 tracking-wide">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">{project.title}</h1>
          <p className="text-lg md:text-xl font-light opacity-90">{project.location}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content */}
          <div className="lg:w-2/3 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About the Project</h2>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                {project.description}
              </p>
            </div>

            {/* Gallery Slider */}
            <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="w-full h-80 md:h-[500px]"
              >
                {project.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`${project.title} Image ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Sidebar / Project Info */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Project Overview</h3>
              
              <ul className="space-y-6">
                <li className="flex flex-col">
                  <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Status</span>
                  <span className="text-gray-900 font-medium text-lg">{project.date}</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Client</span>
                  <span className="text-gray-900 font-medium text-lg">{project.client}</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Location</span>
                  <span className="text-gray-900 font-medium text-lg">{project.location}</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">Estimated Value</span>
                  <span className="text-gray-900 font-medium text-lg">{project.value}</span>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <Link
                  to="/projects"
                  className="w-full block text-center bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-md"
                >
                  View All Projects
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetailsPage;
