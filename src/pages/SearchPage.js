import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './SearchPage.css';

const SearchPage = () => {
    return (

        <div className='searchPage'>
            <div className='searchPage_header'>
                <Link to="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Google_logo_%282010-2013%29.svg" alt="google icon" />
                </Link>

                <div className='searchPage_headerBody'>
                    <Search hidebuttons />
                    <div className='searchPage_options'>
                        <div className='searchPage_optionsLeft'>
                            <div className='searchPage_option'>
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className='searchPage_option'>
                                <DescriptionIcon />
                                <Link to="/all">News</Link>
                            </div>
                            <div className='searchPage_option'>
                                <ImageIcon />
                                <Link to="/all">Images</Link>
                            </div>
                            <div className='searchPage_option'>
                                <LocalOfferIcon />
                                <Link to="/all">Shopping</Link>
                            </div>
                            <div className='searchPage_option'>
                                <RoomIcon />
                                <Link to="/all">maps</Link>
                            </div>
                            <div className='searchPage_option'>
                                <MoreVertIcon />
                                <Link to="/all">more</Link>
                            </div>
                        </div>

                        <div className='searchPage_optionsRight'>
                            <div className='searchPage_option'>
                                <Link to="/settings">Settings</Link>
                            </div>
                            <div className='searchPage_option'>
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='searchPage_results'>

            </div>
        </div>
    )
}

export default SearchPage