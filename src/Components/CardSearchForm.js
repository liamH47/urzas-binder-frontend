import React from 'react';

const CardSearchForm = ({ searchValue, changeHandler }) => {
    return(
        <div className="search-form">
            <form className="search-bar">
                <input id="name-search-bar" type="text" value={searchValue} onChange={changeHandler} placeholder="search by name" />
            </form>
        </div>
    ) 

}

export default CardSearchForm