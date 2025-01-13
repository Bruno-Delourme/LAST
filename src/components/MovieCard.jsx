import { useState } from 'react'

function MovieCard({ item, type }) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className="movie-card">
      <img 
        src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
        alt={item.title || item.name}
      />
      <h3>{item.title || item.name}</h3>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Masquer détails' : 'Voir détails'}
      </button>
      
      {showDetails && (
        <div className="details">
          <p>{item.overview}</p>
          <p>Note : {item.vote_average}/10</p>
          <p>Date de sortie : {item.release_date || item.first_air_date}</p>
        </div>
      )}
    </div>
  )
}

export default MovieCard 