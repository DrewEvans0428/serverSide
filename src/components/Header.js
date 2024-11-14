import React from "react";
import { Link } from 'react-router-dom';
import "./Header.css";

function Header() {
    return (
        <header id="main-header">
            <div className="main-header">
                <img src="/images/spade_logo.jpg" alt="Spades" />
            </div>
            <nav>
                <ul className="nav-links">
                    <li><Link to="/blackjack">Blackjack</Link></li>
                    <li><Link to="/solitaire">Solitaire</Link></li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/spades">Spades</Link></li>
                    <li><Link to="/poker">Poker</Link></li>
                    <li><Link to="/rummy">Rummy</Link></li>
                    <li><Link to="/bridge">Bridge</Link></li>
                    <li><Link to="/gin-rummy">Gin Rummy</Link></li>
                    <li><Link to="/euchre">Euchre</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;