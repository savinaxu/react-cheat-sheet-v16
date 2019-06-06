import React from 'react';
import './style.css'

function Search(props) {
    const { handleInputChange } = props
    return(
        <form className="form">
            <input 
                className="search"
                autoFocus
                type="text"
                onChange={handleInputChange}
                placeholder="Filter by name"
            />
        </form>
    )
}

export default Search