import React from 'react'

const Footer = () => {
  return (
    <footer
      className="w-full mt-auto"
      style={{
        background:
          'linear-gradient(180deg, #fefefeff 15%, #b0b5b8ff 80%, #3e3f41ff 100%)',
        height: '282px',
      }}
    >
      <div className="max-w-9xl mx-auto px-15 py-8 h-full relative">
        {/* Top Section */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-red-600">SA</span>
            <span className="text-2xl font-bold text-gray-800">
              Engineering
            </span>
          </div>
          <div className="text-right">
            <h2 className="text-lg font-bold text-gray-800 uppercase">
              SAVINDA ECHO HOLDINGS (PVT) LTD
            </h2>
            <div className="border-b-2 border-red-600 w-32 mt-1"></div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-2">
          <div>
            <h3 className="font-bold text-gray-800 uppercase mb-2">
              Head Office
            </h3>
            <address className="text-gray-600 text-sm not-italic">
              <p className="flex items-center mb-1">
                <span className="text-red-600 mr-2">📍</span>123 Main Street,
                Colombo, Sri Lanka
              </p>
              <p className="flex items-center">
                <span className="text-red-600 mr-2">📞</span>(+94) 11 123 4567
              </p>
            </address>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 uppercase mb-2">
              Service Centers & Stores
            </h3>
            <address className="text-gray-600 text-sm not-italic">
              <p className="flex items-center mb-1">
                <span className="text-red-600 mr-2">📍</span>S A ENGINEERING,
                Hakmana, Matara. Sri Lanka.
              </p>
              <p className="flex items-center mb-1">
                <span className="text-red-600 mr-2">📍</span>S A ENGINEERING.
                Madampe, Chilaw. Sri Lanka.
              </p>
              <p className="flex items-center">
                <span className="text-red-600 mr-2">📧</span>
                service@saholdings.lk
              </p>
            </address>
          </div>
          <div>
            <h3 className="font-bold text-gray-800 uppercase mb-2">
              Contact Info
            </h3>
            <div className="text-gray-600 text-sm">
              <p className="flex items-center mb-1">
                <span className="text-red-600 mr-2">📞</span>Phone: (+94) 11 987
                6543
              </p>
              <p className="flex items-center">
                <span className="text-red-600 mr-2">📧</span>Email:
                info@saholdings.lk
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end justify-center">
            <img
              src="/src/assets/icon.png"
              alt="SA Engineering QR Code"
              className="w-40 h-40"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-red-600 pt-2">
          <div className="flex items-center">
            <p className="flex-1 text-center text-white font-bold text-sm">
              © 2025 S A Engineering | All Rights Reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="#facebook"
                className="text-gray-800 hover:text-red-600 transition-colors"
              >
                <img
                  src="/src/assets/face.png"
                  alt="Facebook"
                  className="w-5 h-5"
                />
              </a>
              <a
                href="#linkedin"
                className="text-gray-800 hover:text-red-600 transition-colors"
              >
                <img
                  src="/src/assets/linked.png"
                  alt="LinkedIn"
                  className="w-5 h-5"
                />
              </a>
              <a
                href="#instagram"
                className="text-gray-800 hover:text-red-600 transition-colors"
              >
                <img
                  src="/src/assets/insta.png"
                  alt="Instagram"
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
