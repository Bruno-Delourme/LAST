import { useState, useEffect } from 'react'
import MovieList from '../MovieList/MovieList'
import Header from '../Header/Header'
import { fakeMovies, fakeSeries } from '../../FakeData/FakeData'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])
  const [series, setSeries] = useState([])

  useEffect(() => {
    // Utilisation des données de test au lieu de l'API
    setMovies(fakeMovies)
    setSeries(fakeSeries)
  }, [])

  return (
    <div className="app">
      <Header />
      <main>
        <section>
          <h2>Derniers Films</h2>
          <MovieList items={movies} type="movie" />
        </section>
        <section>
          <h2>Dernières Séries</h2>
          <MovieList items={series} type="tv" />
        </section>
      </main>
    </div>
  )
}

export default App 