import React, { useEffect, useState } from "react";
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
  const [view, setView] = useState("site"); // "site" | "3d"

  useEffect(() => {
    window.scrollTo(0, 0);
    setView("site"); // reset to site view when project changes
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

  const activeImages = view === "3d" && project.images3D ? project.images3D : project.images;

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

            {/* View Toggle Buttons - only shown if 3D images exist */}
            {project.images3D && (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setView("site")}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-sm ${
                    view === "site"
                      ? "bg-gray-900 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Site Photos
                </button>
                <button
                  onClick={() => setView("3d")}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-sm ${
                    view === "3d"
                      ? "bg-orange-600 text-white shadow-md"
                      : "bg-orange-50 text-orange-600 hover:bg-orange-100"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                  3D Design
                </button>
              </div>
            )}

            {/* Gallery Slider */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              {/* Label badge */}
              {view === "3d" && (
                <div className="bg-orange-600 text-white text-center text-xs font-bold py-2 tracking-widest uppercase">
                  3D Design Renders
                </div>
              )}
              <Swiper
                key={view} // re-mount swiper when view changes
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="w-full h-80 md:h-[500px]"
              >
                {activeImages.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`${project.title} ${view === "3d" ? "3D Design" : "Image"} ${idx + 1}`}
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
                  <span className={`font-semibold text-lg ${project.date === "Completed" ? "text-green-600" : "text-orange-500"}`}>
                    {project.date}
                  </span>
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
                {project.images3D && (
                  <li className="flex flex-col">
                    <span className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-2">View</span>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => setView("site")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                          view === "site" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Site Photos
                      </button>
                      <button
                        onClick={() => setView("3d")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                          view === "3d" ? "bg-orange-600 text-white" : "bg-orange-50 text-orange-600 hover:bg-orange-100"
                        }`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                        </svg>
                        3D Design
                      </button>
                    </div>
                  </li>
                )}
              </ul>

              <div className="mt-8 pt-8 border-t border-gray-200">
              </div>
            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetailsPage;
