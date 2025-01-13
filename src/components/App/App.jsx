import { useState, useEffect } from 'react'
import MovieList from '../MovieList/MovieList'
import Header from '../Header/Header'
import { fakeMovies, fakeSeries } from '../../FakeData/FakeData'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])
  const [selectedPlatform, setSelectedPlatform] = useState(null)

  useEffect(() => {
    // Simulation de données avec plateformes
    const moviesWithPlatforms = fakeMovies.map(movie => ({
      ...movie,
      platforms: getRandomPlatforms() // À remplacer par de vraies données plus tard
    }))
    const seriesWithPlatforms = fakeSeries.map(series => ({
      ...series,
      platforms: getRandomPlatforms() // À remplacer par de vraies données plus tard
    }))

    setMovies(moviesWithPlatforms)
    setSeries(seriesWithPlatforms)
  }, [])

  // Fonction temporaire pour simuler les plateformes disponibles
  const getRandomPlatforms = () => {
    const allPlatforms = ['Netflix', 'Disney+', 'Prime Video', 'Apple TV+', 'Canal+', 'OCS']
    return allPlatforms.filter(() => Math.random() > 0.5)
  }

  const handlePlatformSelect = (platformName) => {
    setSelectedPlatform(platformName === selectedPlatform ? null : platformName)
  }

  const filterByPlatform = (items) => {
    if (!selectedPlatform) return items
    return items.filter(item => item.platforms.includes(selectedPlatform))
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