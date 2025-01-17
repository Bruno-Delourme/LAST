import { useState, useEffect } from 'react'
import MovieList from '../MovieList/MovieList'
import Header from '../Header/Header'
import { movieService } from '../../services/api'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])
  const [selectedPlatform, setSelectedPlatform] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const [moviesData, seriesData] = await Promise.all([
          movieService.getLatestMovies(),
          movieService.getLatestTVShows()
        ])
        
        setMovies(moviesData)
        setSeries(seriesData)
        setError(null)
      } catch (err) {
        setError('Erreur lors du chargement des données')
        console.error('Erreur:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const handlePlatformSelect = (platformName) => {
    setSelectedPlatform(platformName === selectedPlatform ? null : platformName)
  }

  const filterByPlatform = (items) => {
    if (!selectedPlatform) return items
    return items.filter(item => item.platforms.includes(selectedPlatform))
  }

  if (isLoading) {
    return <div className="loading">Chargement...</div>
  }

  if (error) {
    return <div className="error">{error}</div>
  }

  return (
    <div className="app">
      <Header 
        selectedPlatform={selectedPlatform}
        onPlatformSelect={handlePlatformSelect}
      />
      <main>
        <section>
          <h2>Derniers Films</h2>
          <MovieList items={filterByPlatform(movies)} type="movie" />
        </section>
        <section>
          <h2>Dernières Séries</h2>
          <MovieList items={filterByPlatform(series)} type="tv" />
        </section>
      </main>
    </div>
  )
}

export default App 