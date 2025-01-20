import PropTypes from 'prop-types'
import { useRef, useState } from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'

function MovieList({ items = [] }) {
  console.log('Items reçus:', items); // Pour déboguer
  
  const scrollContainerRef = useRef(null)
  const [expandedCardId, setExpandedCardId] = useState(null)

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = 300 // Ajustez cette valeur selon vos besoins
      const currentScroll = container.scrollLeft

      container.scrollTo({
        left: direction === 'left' 
          ? currentScroll - scrollAmount 
          : currentScroll + scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const handleCardClick = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id)
  }

  const movieItems = Array.isArray(items) ? items : []

  return (
    <div className="movie-list-container">
      {movieItems.length > 0 && (
        <button 
          className="scroll-button left"
          onClick={() => scroll('left')}
          aria-label="Défiler à gauche"
        >
          ←
        </button>
      )}

      <div className="movie-list" ref={scrollContainerRef}>
        {movieItems.map(item => (
          <MovieCard 
            key={item.id} 
            item={item}
            isExpanded={expandedCardId === item.id}
            onClick={() => handleCardClick(item.id)}
          />
        ))}
      </div>

      {movieItems.length > 0 && (
        <button 
          className="scroll-button right"
          onClick={() => scroll('right')}
          aria-label="Défiler à droite"
        >
          →
        </button>
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