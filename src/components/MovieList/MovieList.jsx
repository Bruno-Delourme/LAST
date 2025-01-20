import PropTypes from 'prop-types'
import { useRef, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'

function MovieList({ items = [] }) {
  console.log('Items reçus:', items); // Pour déboguer
  
  const scrollContainerRef = useRef(null)
  const [expandedCardId, setExpandedCardId] = useState(null)

  const movieItems = Array.isArray(items) ? items : []

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
      {movieItems.length > 0 ? (
        <>
          <button 
            className="scroll-button scroll-left" 
            onClick={() => scroll('left')}
            aria-label="Défiler à gauche"
          >
            ←
          </button>
          
          <div className="movie-grid" ref={scrollContainerRef}>
            {movieItems.map(item => (
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
        </>
      ) : (
        <div className="error-message">
          Aucun contenu disponible
        </div>
      )}
    </div>
  )
}

MovieList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      poster_path: PropTypes.string,
    })
  )
}

export default MovieList 