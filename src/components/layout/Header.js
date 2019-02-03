import React from 'react';
import {Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header style={headerStyle}>
              <Link to="/" style={linkStyle}><h1>Todo List</h1></Link>
              <Link to="/" style={linkStyle}>Home</Link> | <Link to="/about" style={linkStyle}>About</Link>
                </header>
            
        </div>
    );
};
const headerStyle = {
    color: '#fff',
    backgroundColor: '#333',
    textAlign: 'center',
    padding:'2px'
}
const linkStyle ={
    color: '#fff',
    textDecoration:'none'
}

export default Header;