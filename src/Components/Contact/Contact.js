import React from 'react';
import {Link} from 'react-router-dom';
import './Contact.css';

function Contact(props) {
    return (
        <div className="Contact">
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
            <h1>Contact</h1>
        </div>
    );
}

export default Contact;