import React from 'react'
import '../styles/favorites.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { movieActions } from '../redux/slices/movieSlice'
const Favorites = () => {
    const state = useSelector((state) => state.movie)
    const dispatch = useDispatch()
    
    return (
        <div className="favorites">
            <input disabled={state.saved} value={state.title} onChange={(e)=>dispatch(movieActions.setTitle(e.target.value))} className="favorites__name" />
            {
                state.movies.length === 0 ?
                    <p className='empty'>There is no movie in list</p> :
                    <ul className="favorites__list">
                        {state.movies.map((item) => {
                            return <li className='fav-item' key={item.id}>
                                <p>{item.title} ({item.year})</p>
                                {!state.saved && <button onClick={()=>dispatch(movieActions.removeFromList(item.id))}>X</button>}
                            </li>;
                        })}
                    </ul>
            }
            {
                !state.saved? <button disabled={state.movies.length===0||state.title.length===0} onClick={()=>dispatch(movieActions.saveList())} type="button" className="favorites__save">Save List</button>:
                <Link to="/lists" className="favorites__save">Go To List</Link>
            }
        </div>

    )
}

export default Favorites