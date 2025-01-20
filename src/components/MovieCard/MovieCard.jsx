import PropTypes from 'prop-types'
import './MovieCard.css'

function MovieCard({ item }) {
  // URL de base pour les images TMDB
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

  return (
    <div className="movie-card">
      {item.poster_path ? (
        <img 
          src={`${IMAGE_BASE_URL}${item.poster_path}`}
          alt={item.title || item.name}
          loading="lazy"
        />
      ) : (
        <div className="movie-card-placeholder">
          Pas d'image disponible
        </div>
      )}
      <h3>{item.title || item.name}</h3>
    </div>
  )
}

MovieCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    name: PropTypes.string, // Pour les séries TV
    poster_path: PropTypes.string
  }).isRequired
}

export default MovieCard 