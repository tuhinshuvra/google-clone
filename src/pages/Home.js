import React from 'react'
import './Search.css';
import './Home.css';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/icons-material/AccountCircle';
import Search from './Search';

const Home = () => {
    return (
        <div className='home'>
            <div className='home_header'>
                <div className='home_headerLeft'>
                    <p>About</p>
                    <p>Store</p>
                </div>
                <div className='home_headerRight'>
                    <p><a className='gmail' href="https://accounts.google.com/signin/v2/identifier?flowName=GlifWebSignIn&flowEntry=ServiceLogin"> Gmail</a></p>
                    <p>Images</p>
                    <AppsIcon />
                    <Avatar />
                </div>
            </div>
            <div className='home_body'>
                <img src="https://www.google.com.bd/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google search image" />

                <div className='home_inputContainer'>
                    <Search />
                </div>

            </div>
        </div>
    )
}

export default Home