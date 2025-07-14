import { useEffect, useState } from "react";
import MovieCards from "./MovieCards";
import { getPopularMovies } from "../api/MovieApi";

const MovieList = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await getPopularMovies();
            setMovies(response.results)
            console.log(response.results[0]);
        }
        fetchMovies()
    }, [])
    return (
        <div className="movie-list">
            <div className="container">
                <div className="list-title py-4">
                    Popular
                </div>
                <div className="row gy-3">
                    {movies.map(movie => {
                        return <MovieCards data={movie} key={movie.id} />
                    })}
                </div>
            </div>

        </div>
    )
}

export default MovieList
