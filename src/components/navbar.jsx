import React, { Component } from 'react';

const NavBar = (props) => {

    return (
        <nav className="navbar navbar-light bg-light"  style={{height:50}}>
            <span className="badge badge-pill badge-secondary">
                TaskManager             
            </span>
        </nav>
      );
}
 
export default NavBar;