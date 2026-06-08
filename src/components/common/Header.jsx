import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'

const Header = ({
  bgGradient = 'from-brand-purple-dark via-brand-purple-medium to-brand-purple-light',
  textColor = 'text-text-light',
}) => {
  const navigate = useNavigate()
  const location = useLocation()
  const isTransparentHeader = true
  const headerTextColor = isTransparentHeader ? 'text-white font-bold' : textColor
  const [showWhoWeAre, setShowWhoWeAre] = useState(false)
  const [showWhatWeDo, setShowWhatWeDo] = useState(false)

  const whoWeAreRef = useRef(null)
  const whatWeDoRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedInWhoWeAre =
        whoWeAreRef.current && whoWeAreRef.current.contains(event.target)
      const clickedInWhatWeDo =
        whatWeDoRef.current && whatWeDoRef.current.contains(event.target)

      if (!clickedInWhoWeAre && !clickedInWhatWeDo) {
        setShowWhoWeAre(false)
        setShowWhatWeDo(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header
      className={`w-full ${
        isTransparentHeader
          ? 'backdrop-blur-sm bg-white/10 absolute top-0 left-0 right-0 z-50'
          : `backdrop-blur-sm bg-gradient-to-b ${bgGradient}`
      } ${headerTextColor}`}
      style={
        isTransparentHeader
          ? { background: 'transparent' }
          : {
              background:
                'linear-gradient(180deg, #cb1f1fff 0%, #e86e6eff 22%, #eea6acff 95%)',
            }
      }
    >
      <div
        className="max-w-8xl mx-auto px-10 py-6 header-hero-container"
        style={{ height: '150px' }}
      >
        <div className="flex items-center justify-between mb-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-white rounded-full p-0.5">
              <img src="src/assets/icon.png" alt="Icon" className="w-15 h-15" />
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold leading-tight mb-1">
                SA Engineering
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4 md:gap-8 text-font-medium">
            <button
              onClick={() => navigate('/')}
              className="hover:text-brand-cyan transition-colors font-bold"
            >
              Home
            </button>
            <button
              onClick={() => navigate('/investors')}
              className="hover:text-brand-cyan transition-colors font-bold"
            >
              Investors
            </button>
            {/* <button
              onClick={() => navigate('/sustainability')}
              className="hover:text-brand-cyan transition-colors font-bold"
            >
              Sustainability
            </button> */}
            <button
              onClick={() => navigate('/news')}
              className="hover:text-brand-cyan transition-colors font-bold"
            >
              News & Notification
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end border-t border-white/20 pt-4">
          <nav className="flex items-center gap-4 md:gap-12">
            {/* Who We Are Dropdown */}
            <div className="relative" ref={whoWeAreRef}>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setShowWhoWeAre(!showWhoWeAre)
                  if (showWhatWeDo) setShowWhatWeDo(false)
                }}
                className="flex items-center gap-2 hover:text-brand-cyan transition-colors text-lg font-medium"
              >
                <span>Who We Are</span>
                <span className="text-sm">▼</span>
              </button>

              {showWhoWeAre && (
                <div
                  className={`absolute top-full left-0 mt-2 rounded shadow-lg py-2 min-w-[180px] z-50 ${
                    isTransparentHeader
                      ? 'backdrop-blur-md bg-white/10 text-white font-semibold'
                      : 'bg-white text-black font-bold'
                  }`}
                >
                  <button
                    onClick={() => {
                      setShowWhoWeAre(false)
                      setShowWhatWeDo(false)
                      navigate('/about')
                    }}
                    className={`block px-4 py-2 w-full text-left text-sm whitespace-nowrap ${
                      isTransparentHeader ? 'hover:bg-white/20' : 'hover:bg-gray-200'
                    }`}
                  >
                    About Us
                  </button>
                  <button
                    onClick={() => {
                      setShowWhoWeAre(false)
                      setShowWhatWeDo(false)
                      navigate('/team')
                    }}
                    className={`block px-4 py-2 w-full text-left text-sm whitespace-nowrap ${
                      isTransparentHeader ? 'hover:bg-white/20' : 'hover:bg-gray-200'
                    }`}
                  >
                    Our Team
                  </button>
                  <button
                    onClick={() => {
                      setShowWhoWeAre(false)
                      setShowWhatWeDo(false)
                      navigate('/values')
                    }}
                    className={`block px-4 py-2 w-full text-left text-sm whitespace-nowrap ${
                      isTransparentHeader ? 'hover:bg-white/20' : 'hover:bg-gray-200'
                    }`}
                  >
                    Our Values
                  </button>
                </div>
              )}
            </div>

            {/* What We Do Dropdown */}
            <div className="relative" ref={whatWeDoRef}>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setShowWhatWeDo(!showWhatWeDo)
                  if (showWhoWeAre) setShowWhoWeAre(false)
                }}
                className="flex items-center gap-2 hover:text-brand-cyan transition-colors text-lg font-medium"
              >
                <span>What We Do</span>
                <span className="text-sm">▼</span>
              </button>

              {showWhatWeDo && (
                <div
                  className={`absolute top-full left-0 mt-2 rounded shadow-lg py-2 min-w-[180px] z-50 ${
                    isTransparentHeader
                      ? 'backdrop-blur-md bg-white/10 text-white font-semibold'
                      : 'bg-white text-black font-bold'
                  }`}
                >
                  <button
                    onClick={() => {
                      setShowWhoWeAre(false)
                      setShowWhatWeDo(false)
                      navigate('/engineering-services')
                    }}
                    className={`block px-4 py-2 w-full text-left text-sm whitespace-nowrap ${
                      isTransparentHeader ? 'hover:bg-white/20' : 'hover:bg-gray-200'
                    }`}
                  >
                    Engineering Services
                  </button>
                  <button
                    onClick={() => {
                      setShowWhoWeAre(false)
                      setShowWhatWeDo(false)
                      navigate('/consulting')
                    }}
                    className={`block px-4 py-2 w-full text-left text-sm whitespace-nowrap ${
                      isTransparentHeader ? 'hover:bg-white/20' : 'hover:bg-gray-200'
                    }`}
                  >
                    Consulting
                  </button>
                  <button
                    onClick={() => {
                      setShowWhoWeAre(false)
                      setShowWhatWeDo(false)
                      navigate('/projects')
                    }}
                    className={`block px-4 py-2 w-full text-left text-sm whitespace-nowrap ${
                      isTransparentHeader ? 'hover:bg-white/20' : 'hover:bg-gray-200'
                    }`}
                  >
                    Projects
                  </button>
                </div>
              )}
            </div>

            {/* Contact Us */}
            <button
              onClick={() => {
                setShowWhoWeAre(false)
                setShowWhatWeDo(false)
                navigate('/contact')
              }}
              className="hover:text-brand-cyan transition-colors text-lg font-medium"
            >
              Contact Us
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
