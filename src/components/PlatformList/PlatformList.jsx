import { useRef, useState, useEffect } from 'react'
import './PlatformList.css'

const platforms = [
  { id: 1, name: 'Netflix', logo: '🔴' },
  { id: 2, name: 'Disney+', logo: '⭐' },
  { id: 3, name: 'Prime Video', logo: '🔵' },
  { id: 4, name: 'Apple TV+', logo: '🍎' },
  { id: 5, name: 'Canal+', logo: '©️' },
  { id: 6, name: 'OCS', logo: '🟡' },
  { id: 7, name: 'Arte', logo: '🎨' },
  { id: 8, name: 'YouTube', logo: '▶️' },
  { id: 9, name: 'Filmo', logo: '🎬' },
  { id: 10, name: 'Rakuten', logo: '🔷' },
  { id: 11, name: 'ADN', logo: '🎌' },
  { id: 12, name: 'Crunchyroll', logo: '🟠' }
]

import PropTypes from 'prop-types'

function PlatformList({ selectedPlatform, onPlatformSelect }) {
  const scrollContainerRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', checkScroll)
      checkScroll()
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScroll)
      }
    }
  }, [])

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="platform-list-container">
      {showLeftArrow && (
        <button 
          className="platform-scroll-button platform-scroll-left"
          onClick={() => scroll('left')}
          aria-label="Défiler à gauche"
        >
          <svg 
            className="arrow-icon" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
      )}

      <div 
        className="platform-list" 
        ref={scrollContainerRef}
      >
        {platforms.map((platform) => (
          <div 
            key={platform.id} 
            className={`platform-item ${selectedPlatform === platform.name ? 'selected' : ''}`}
            onClick={() => onPlatformSelect(platform.name)}
          >
            <span className="platform-logo">{platform.logo}</span>
            <span className="platform-name">{platform.name}</span>
          </div>
        ))}
      </div>

      {showRightArrow && (
        <button 
          className="platform-scroll-button platform-scroll-right"
          onClick={() => scroll('right')}
          aria-label="Défiler à droite"
        >
          <svg 
            className="arrow-icon" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      )}
    </div>
  )
}

export default PlatformList 