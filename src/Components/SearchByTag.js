import React from 'react';

const SearchByTag = ({ searchValue, changeHandler }) => {
    return(
        <div className="search-form">
            <form className="search-bar">
                <input className="input-text" type="text" value={searchValue} onChange={changeHandler} placeholder="search by tag" />
            </form>
        </div>
    ) 

}

export default SearchByTag