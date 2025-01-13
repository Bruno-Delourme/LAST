import MovieCard from './MovieCard'

function MovieList({ items, type }) {
  return (
    <div className="movie-grid">
      {items.map(item => (
        <MovieCard key={item.id} item={item} type={type} />
      ))}
    </div>
  )
}

export default MovieList 