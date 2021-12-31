import React, { useState } from 'react';
import Header from '../common/Header';

const Home = () => {
    let token = localStorage.getItem('token')
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <div>
            <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} token={token} />
            <p>HERE IS HOME</p>
        </div>
    )
}

export default Home
