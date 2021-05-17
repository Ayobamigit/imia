import React from 'react';
import './Search.scss';
import {ReactComponent as SearchIcon} from '../../assets/icons/search.svg';

const Search = (props) => {
    return (
        <div className="search-wrapper">
            <div className="search">
                <input type="text" className={`search-input ${props.className ? props.className : ''}`} placeholder={props.placeholder}/>
                <button className="search-button">
                    <SearchIcon />
                </button>
            </div>
            
        </div>
    )
}

export default Search
