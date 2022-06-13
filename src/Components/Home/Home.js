import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';

function Home(props) {
    return (
        <div className="Home">
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/notes/:noteId">Notes</Link>
                    </li>
                </ul>
            </nav>
            <h1>Home</h1>
        </div>
    );
}

export default Home;