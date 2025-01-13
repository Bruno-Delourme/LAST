import React from 'react'
import './MovieCard.css'

function MovieCard({ item, isExpanded, onClick }) {
  const platforms = [
    { name: 'Netflix', icon: '🔴' },
    { name: 'Prime Video', icon: '🔵' },
    { name: 'Disney+', icon: '⭐' },
  ]

  return (
    <div 
      className={`movie-card ${isExpanded ? 'expanded' : ''}`}
      onClick={onClick}
    >
      <div className="movie-card-content">
        <img 
          src={item.poster_path}
          alt={item.title || item.name}
        />
        <h3>{item.title || item.name}</h3>
      </div>
      
      {isExpanded && (
        <div className="platforms-overlay">
          <h4>Disponible sur :</h4>
          <div className="platforms-list">
            {platforms.map((platform, index) => (
              <div key={index} className="platform">
                <span className="platform-icon">{platform.icon}</span>
                <span className="platform-name">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default MovieCard 