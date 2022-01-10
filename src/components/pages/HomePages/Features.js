import React, { useState } from 'react';
import Header from '../../common/Header';
import Footer from '../../common/footer';
import Sidebar from './Sidebar';

const Features = () => {
    let token = localStorage.getItem('token')
    const [loggedIn, setLoggedIn] = useState(false);
    return (
        <div>
            <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} token={token} />
            <div>
                <h1>COOL FEATURES COMING SOON</h1>
            </div>
            <Sidebar />

            <Footer />
        </div>
    )
}

export default Features
