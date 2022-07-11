import React from 'react'
import { useState } from 'react';
import './Search.css';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { useHistory } from 'react-router-dom';
// import { Button } from '@mui/icons-material/Core';


const Search = ({ hidebuttons }) => {

    const [input, setInput] = useState("");
    const history = useHistory();
    const search = (e) => {
        e.preventDefault();
        history.push("/search");
    }
    return (
        <form className='search'>
            <div className='search_input'>
                <SearchIcon className='searchicon' />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>
            {
                !hidebuttons && <div className='search_button'>
                    <button type='submit' onClick={search} varient="outlined">Google Search</button>
                    <button varient="outlined">I'm Felling Lucky</button>

                </div>
            }
        </form>
    )
}

export default Search