import PropTypes from 'prop-types'
import { useState } from 'react'
import { movieService } from '../../services/api'  // Assurez-vous que le chemin est correct
import './MovieCard.css'

function MovieCard({ item }) {
  const [showPlatforms, setShowPlatforms] = useState(false)
  const [platforms, setPlatforms] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

  const handleClick = async () => {
    try {
      if (!showPlatforms) {
        setIsLoading(true)
        // Appel différent selon le type (film ou série)
        const response = await movieService.getPlatforms(item.id, item.name ? 'tv' : 'movie')
        setPlatforms(response.results || [])
      }
      setShowPlatforms(!showPlatforms)
    } catch (error) {
      console.error('Erreur lors du chargement des plateformes:', error)
      setPlatforms([])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div 
      className={`movie-card ${showPlatforms ? 'expanded' : ''}`}
      onClick={handleClick}
    >
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

      {showPlatforms && (
        <div className="platforms-overlay">
          <h4>Disponible sur :</h4>
          {isLoading ? (
            <p>Chargement...</p>
          ) : platforms.length > 0 ? (
            <ul className="platforms-list">
              {platforms.map((platform) => (
                <li key={platform.provider_id}>
                  {platform.provider_name}
                </li>
              ))}
            </ul>
          ) : (
            <p>Aucune plateforme disponible</p>
          )}
        </div>
      )}
    </div>
  )
}

MovieCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    name: PropTypes.string,
    poster_path: PropTypes.string
  }).isRequired
}

export default MovieCard 