import React from 'react'
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

const Search = ({ hidebuttons }) => {
    return (
        <form className='search'>
            <div className='search_input'>
                <SearchIcon className='searchicon' />
                <input />
                <MicIcon />
            </div>
            {
                hidebuttons && <div className='search_button'>
                    <button type='submit' varient="outlined">Google Search</button>
                    <button varient="outlined">I'm Felling Lucky</button>

                </div>
            }
        </form>
    )
}

export default Search