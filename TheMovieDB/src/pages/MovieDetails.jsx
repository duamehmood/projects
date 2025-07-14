import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getMovieDetail } from '../api/MovieApi'

const MovieDetails = () => {
    const { id } = useParams()
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        const fetchMovie = async () => {
            const response = await getMovieDetail(id)
            setMovie(response)
        }
        fetchMovie()
    }, [id])

    if (!movie) return <div className="text-center py-5">Loading...</div>

    return (
        <div className="movie-detail-card container p-4">
            <h2 className="movie-detail-title mb-2">{movie.title}</h2>
            <div className="row">
                <div className="col-lg-12">
                    <img
                        src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`}
                        alt={movie.title}
                        className="w-100"
                    />
                </div>
                <div>
                    <div className=" d-flex align-items-center justify-content-between flex-wrap gap-2">
                        <div>
                            <strong className="me-2">Genres:</strong>
                            {movie.genres?.map(g => (
                                <span key={g.id} className="genre-badge">{g.name}</span>
                            ))}
                        </div>
                        <div className="mt-4">
                            <Link to="/" className="visit-home-btn">Visit Home Page</Link>
                        </div>
                    </div>
                    <div className="mb-2">
                        <strong>Overview:</strong> {movie.overview}
                    </div>
                    <div className="mb-2">
                        <strong>Release Date:</strong> {movie.release_date}
                    </div>
                    <div className="movie-detail-section mb-2">
                        <strong>Countries:</strong> {movie.production_countries?.map(c => c.name).join(", ")}
                    </div>
                    <div className="mb-2">
                        <strong>Status:</strong> {movie.status}
                    </div>
                    <div className="mb-2">
                        <strong>Language:</strong> {movie.spoken_languages?.map(l => l.english_name).join(", ")}
                    </div>

                    <div className="mb-2">
                        <strong>Budget:</strong> ${movie.budget?.toLocaleString()}
                    </div>
                    <div className="mb-2">
                        <strong>Revenue:</strong> ${movie.revenue?.toLocaleString()}
                    </div>
                    <div className="mb-3">{movie.tagline}</div>
                    <div className="mb-2">
                        <strong>Production Companies:</strong> {movie.production_companies?.map(pc => pc.name).join(", ")}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MovieDetails
