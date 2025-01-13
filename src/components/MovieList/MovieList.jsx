import React, { useRef, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'

function MovieList({ items, type }) {
  const scrollContainerRef = useRef(null)
  const [expandedCardId, setExpandedCardId] = useState(null)

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const handleCardClick = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id)
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
          <MovieCard 
            key={item.id} 
            item={item}
            isExpanded={expandedCardId === item.id}
            onClick={() => handleCardClick(item.id)}
          />
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