import React, { useRef } from 'react'
import './MovieList.css'

function MovieList({ items, type }) {
  const scrollContainerRef = useRef(null)

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400 // Ajustez cette valeur selon vos besoins
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div style={{ position: 'relative' }}>
      <button 
        className="scroll-button scroll-left" 
        onClick={() => scroll('left')}
        aria-label="Défiler à gauche"
      >
        ←
      </button>
      
      <div className="movie-grid" ref={scrollContainerRef}>
        {items.map(item => (
          <div key={item.id} className="movie-card">
            <img 
              src={item.poster_path}
              alt={item.title || item.name}
            />
            <h3>{item.title || item.name}</h3>
          </div>
        ))}
      </div>

      <button 
        className="scroll-button scroll-right" 
        onClick={() => scroll('right')}
        aria-label="Défiler à droite"
      >
        →
      </button>
    </div>
  )
}

export default MovieList 