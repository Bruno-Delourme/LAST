import React, { useRef } from 'react'
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

function PlatformList({ selectedPlatform, onPlatformSelect }) {
  const scrollContainerRef = useRef(null)

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
      <button 
        className="platform-scroll-button platform-scroll-left" 
        onClick={() => scroll('left')}
        aria-label="Défiler à gauche"
      >
        ←
      </button>

      <div className="platform-list" ref={scrollContainerRef}>
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

      <button 
        className="platform-scroll-button platform-scroll-right" 
        onClick={() => scroll('right')}
        aria-label="Défiler à droite"
      >
        →
      </button>
    </div>
  )
}

export default PlatformList 