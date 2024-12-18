import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/list-page.css'
import { useSelector } from 'react-redux';
const ListPage = () => {
    const state = useSelector((state)=>state.movie)
    return (
        <div className="list-page">
            <h1 className="list-page__title">{state.title}</h1>
            {
                state.movies.length === 0 ?
                <p className='empty'>There is no movie in list</p>:
                <ul>
                {state.movies.map((item) => {
                    return (
                        <li key={item.imdbID}>
                            <Link to={`https://www.imdb.com/title/${item.id}/`} target="_blank">{item.title} ({item.year})</Link>
                        </li>
                    );
                })}
            </ul>
            }
        </div>

    )
}

export default ListPage