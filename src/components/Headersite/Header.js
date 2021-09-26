import './Header.css';

import React from 'react';

//header use for show the details of website
const Header = () => {
    let cost = 2000
    return (
        <div className="headerParent">
            <ul className="nav  bg-dark">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="./Active">MAEP</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="./home">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="./about">About</a>
            </li>
            
            </ul>
            <div>
                <p className="header-content">My website name is MAEP.Which is employee management system. <br /> An organization hass many employeers.every organization pay the salary for each employeers. <br /> If an organization has an website which is show the total cost per month.it is easier to counting how costly an organization.</p>
            </div>
            <h2>Total cost is :${cost}million</h2>
        </div>
    );
};

export default Header;