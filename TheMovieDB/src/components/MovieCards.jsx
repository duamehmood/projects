import { Link } from "react-router-dom"

const MovieCards = ({data}) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 movie-cards">
      <Link to={`/movie/${data.id}`} className="text-decoration-none">
        <div className="card">
          <figure className="overflow-hidden">
            <img className="poster" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt={data.title} />
          </figure>
          <h3 className="title py-2">{data.title}</h3>
          <div className="card-details d-flex align-items-center">
            <img src="./src/assets/Rating.svg" alt="Rating star" />
            <span className="rating px-1">{data.vote_average.toFixed(1)} .</span>
            <span> {data.original_language.toUpperCase()} . Movie</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MovieCards
