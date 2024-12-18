import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { movieActions } from '../redux/slices/movieSlice'

const SearchBox = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState({
        searchLine: ''
    })
    const searchLineChangeHandler = (e) => {
        setState({ searchLine: e.target.value });
    }
    const searchBoxSubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        dispatch(movieActions.setSearch(formData.get('search')))
    }

    return (
        <div className="search-box">
            <form className="search-box__form" onSubmit={searchBoxSubmitHandler}>
                <label className="search-box__form-label">
                    <input
                        name='search'
                        value={state.searchLine}
                        type="text"
                        className="search-box__form-input"
                        placeholder="Search by movie name"
                        onChange={searchLineChangeHandler}
                    />
                </label>
                <button
                    type="submit"
                    className="search-box__form-submit"
                    disabled={!state.searchLine}
                >
                    Search
                </button>
            </form>
        </div>

    )
}

export default SearchBox