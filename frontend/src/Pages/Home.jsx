import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
    return (
        <>

            <nav>Home</nav>
            <div className="homePage">
                <Link to="/templates">Create a web</Link>
            </div>
        </>
    );
}

export default Home;