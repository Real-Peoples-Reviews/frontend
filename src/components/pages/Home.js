import React, { useState } from 'react';
import Header from '../common/Header';
import Footer from '../common/footer';
import Button from 'react-bootstrap/Button';

const Home = () => {
    let token = localStorage.getItem('token')
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <div>
            <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} token={token} />
            <p>HOME PAGE BEING UPDATED</p>
            <Footer />
        </div>
    )
}

export default Home
