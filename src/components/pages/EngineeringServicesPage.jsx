import React from 'react'
import { Layout } from '../common'
import { motion } from 'framer-motion'
import boilersImg from '../../assets/EngService/boilers.jpg'
import waterTreatmentImg from '../../assets/EngService/water-treatment.jpg'
import swimmingPoolImg from '../../assets/EngService/swimming-pool.jpg'
import wasteWaterImg from '../../assets/EngService/waste-water.jpg'
import automationImg from '../../assets/EngService/automation.jpg'
import industrialEquipmentImg from '../../assets/EngService/industrial-equipment.jpg'
import heroImg from '../../assets/EngService/boilers.jpg'

const EngineeringServices = () => {
  const services = [
    {
      id: 1,
      title: 'Boilers',
      image: boilersImg,
      sale: [
        'Steam boiler Thermic Heaters',
        'Pre-Fabricated Chimneys',
        'Hot Water Generators Hot Air Generators',
        'Environmental Pollution Equipment',
        'Ring Main System',
      ],
      installation: [
        'Boiler Placing',
        'Boiler Installation',
        'Master Planning Steam Distribution line laying',
        'Insulation Utility Support (Furnas oil, Deisel, Chemicals)',
      ],
      services: [
        'Boiler Service (Overhauling)',
        'Maintenance Contract',
        'Maintenance Planning',
        'Commissioning Boiler Operators hire',
        'Issuing Boiler Inspection license (Factory audience)',
        'Low Carbon Emission Operation & Maintenance',
        'Energy & Sustainability Solutions',
      ],
    },
    {
      id: 2,
      title: 'Water Treatment Plant',
      image: waterTreatmentImg,
      sale: [
        'Softener',
        'Reverse Osmosis',
        'Sea-water Desalination Plants',
        'Brackish water Filtering',
        'Dosing pump Systems Pump Skid',
        'Sediment Fil',
      ],
      installation: [
        'Filter assembly Pump kit',
        'Arietian Systems',
        'UPVC, CPVC, PVC, SS, GI Piping',
        'Sump Tank construction',
      ],
      services: [
        'Chemical Treatments Annual Treatment',
        'CIP',
        'Plant Operators hire Lab Test',
        'EPL Certificate Support',
      ],
    },
    {
      id: 3,
      title: 'Swimming Pools & Spairs',
      image: swimmingPoolImg,
      sale: ['Pool Filters Chemical', 'Pumps', 'Bench & Chairs', 'SS ladders'],
      installation: [
        'Filter assembly Pumpkit',
        'Arietian Systems',
        'UPVC, CPVC, PVC, SS GI Piping',
        'Sump Tank construction',
      ],
      services: ['Chemical Treatments', 'Annual Treatment Certificate Support'],
    },
    {
      id: 4,
      title: 'Waste-Water Treatment Plant',
      image: wasteWaterImg,
      sale: [
        'Effluent Treatment Plants',
        'Sewage Treatment Plants (RBC/MBR)',
        'Zero Discharge Plants',
      ],
      installation: [
        'Filter assembly Pump kit',
        'Arietian Systems',
        'UPVC, CPVC, PVC, SS, GI Piping',
        'Total Civil Construction',
      ],
      services: [
        'Chemical Treatments',
        'Annual Treatment',
        'COD BOD Balance',
        'Plant Operators hire Lab Test',
        'EPL Certificate Support',
        'Plant Design',
        'Consulting Operations',
        'Retreatment Plant',
        'Operation & Maintenance Agriculture units',
        'Energy & Sustainability Solutions',
      ],
    },
    {
      id: 5,
      title: 'Machineries Automation',
      image: automationImg,
      sale: [
        'Automatic control panels',
        'Automatic control machines',
        'Safety panels',
        'Project solutions Designs',
        'ATS',
        'PLC',
        'PCB Design & Programming',
        'Pneumatic control panel',
        'Hydraulic Control panels',
      ],
      installation: [
        'Control Panel assembly & Installation',
        'Machine Manufacturing or Modifications',
        'Customize automation lines',
      ],
      services: ['Repair panels', 'Panel programming Certificate Support'],
    },
    {
      id: 6,
      title: 'Industrial Equipment & Machineries',
      image: industrialEquipmentImg,
      sale: [
        'All Electrical items Mechanical Fittings',
        'New & Used machines',
        'Utilities (Lubricants | Furnas oil | Deisel | Kerosine)',
        'Chemicals',
      ],
      installation: [
        'Electrical & mechanical equipment assembly & Installation',
        'Machine Manufacturing or Modifications',
      ],
      services: ['Equipment delivery Process Consulting Certificate Support'],
    },
  ]

  return (
    <Layout pageTitle="Engineering Services">

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center px-10">
          <motion.h1
            className="text-6xl font-bold text-white mb-4 drop-shadow-md"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Engineering Services
          </motion.h1>
          <motion.p
            className="text-2xl text-white drop-shadow-md max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Delivering innovative, reliable, and sustainable engineering solutions across boilers, water treatment, automation, and more.
          </motion.p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-12">
          {services.map((service, index) => (
            <motion.article
              key={service.id}
              className={`bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image Section */}
              <div className="relative md:w-1/2 h-64 md:h-auto bg-gray-100">
                <img
                  src={service.image}
                  alt={`Image of ${service.title} service`}
                  className="w-full h-full object-cover transition-all duration-300 ease-in-out hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 text-center p-4">Add ${service.title} Image</div>`
                  }}
                />
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 p-8">
                <header>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-2 border-red-600 pb-2">
                    {service.title}
                  </h2>
                  <p className="text-red-600 font-semibold text-lg mb-8">
                    Selling | Installing | Service
                  </p>
                </header>

                {/* Sale */}
                <section className="mb-8">
                  <div className="flex items-center mb-3">
                    <div className="w-1 h-6 bg-red-600 mr-3"></div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Sale
                    </h3>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {service.sale.join(' | ')}
                  </p>
                </section>

                {/* Installation */}
                <section className="mb-8">
                  <div className="flex items-center mb-3">
                    <div className="w-1 h-6 bg-red-600 mr-3"></div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Installation
                    </h3>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {service.installation.join(' | ')}
                  </p>
                </section>

                {/* Services */}
                <section>
                  <div className="flex items-center mb-3">
                    <div className="w-1 h-6 bg-red-600 mr-3"></div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      Services
                    </h3>
                  </div>
                  <p className="text-base text-gray-700 leading-relaxed">
                    {service.services.join(' | ')}
                  </p>
                </section>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default EngineeringServices
