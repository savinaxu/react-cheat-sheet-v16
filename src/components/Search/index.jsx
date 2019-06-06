import React from 'react';

function Search(props) {
    const { q, handleInputChange } = props
    return(
        <form>
            <input
                type="text"
                name="q"
                value={q}
                onChange={handleInputChange}
                placeholder="Filter by name"
            />
        </form>
    )
}

export default Search