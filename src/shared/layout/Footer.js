import React from 'react';

const Footer = () => {
    const root = {
        marginTop: '20px',
    }

    return (
        <footer style={root}>
            &copy; Programacion Web 2 {new Date().getFullYear()}
        </footer>
    );
}

export default Footer;