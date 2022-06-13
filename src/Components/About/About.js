import React from 'react';
import {Link} from 'react-router-dom';
import './About.css';

function About(props) {
    return (
        <div className="About">
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
            <h1>About</h1>
        </div>
    );
}

export default About;