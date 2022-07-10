import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../images/Logo.jpg';
import {Link} from 'react-router-dom';

const Header = (props) => {
    const {title, url} = props;

    return ( 
        <header className="App-header">
            <div className="App-header-logo">
                <a href={url}>
                    <img src={Logo} className="App-logo" alt="logo" />
                </a>

                <h1>{title}</h1>
            </div>

            <ul>
                <li><Link to="/">Home </Link></li>
                <li><Link to="/Calculadora">Calculadora </Link></li>
                <li><Link to="/Pomodoro">Pomodoro </Link></li>
            </ul>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
}

export default Header;