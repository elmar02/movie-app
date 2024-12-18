import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { movieActions } from '../redux/slices/movieSlice'

const MovieItem = ({ title, year, poster, id }) => {
    const saved = useSelector((state)=> state.movie.saved)
    const dispatch = useDispatch()
    const addToList = ()=>{
        const newMovie = {
            title, id, year
        }
        dispatch(movieActions.addToList(newMovie))
    }    
    return (
        <article className="movie-item">
            <img className="movie-item__poster" src={poster} alt={title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{title}&nbsp;({year})</h3>
                <button disabled={saved} onClick={addToList} className="movie-item__add-button">Add To List</button>
            </div>
        </article>

    )
}

export default MovieItem