import React from 'react'

function SearchBox() {
    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search a todo" aria-label="todo name" aria-describedby="button-addon2" />
            <button className="btn btn-secondary" type="button" id="button-addon2">Search</button>
        </div>
    )
}

export default SearchBox
