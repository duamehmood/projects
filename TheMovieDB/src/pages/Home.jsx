import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import MovieList from "../components/MovieList";

const Home = () => {
    const [search, setSearch] = useState("")


    useEffect(() => {
        const fetchMovies = async () => {
        }
    }, [])


    const handleSearch = () => {
        console.log("Searching for:", search)
    }
    return (
        <div className='home'>
            <Hero search={search} setSearch={setSearch} onSearch={handleSearch} />

            <MovieList />



        </div>
    )
}

export default Home
