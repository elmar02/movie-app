import React, { useEffect, useState } from 'react'
import '../styles/movies.css';
import MovieItem from './MovieItem';
import { useSelector } from 'react-redux';

const Movies = () => {
    const [movies, setMovies] = useState([])
    const [pending, setPending] = useState(false)
    const search = useSelector((state) => state.movie.search)
    useEffect(() => {
        async function fetchData() {
            setPending(prev => !prev)
            try {
                const response = await fetch(`https://www.omdbapi.com/?s=${search===''?'harry':search}&page=1&apikey=41192dfb`)
                const data = await response.json()
                setMovies(data.Search)
            } catch (error) {
                console.error(error);    
            }
            finally{
                setPending(prev => !prev)
            }
        }
        fetchData()
    }, [search])
    
    return (
        pending ? <p>...Loading</p> :
            <ul className="movies">
                {movies.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem title={movie.Title} year={movie.Year} id={movie.imdbID} poster={movie.Poster} />
                    </li>
                ))}
            </ul>
    )
}

export default Movies