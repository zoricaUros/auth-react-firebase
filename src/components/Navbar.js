
import React from "react";
import Kontakt from "../pages/Kontakt";
import { Link } from "react-router-dom";
import './navbar.css';

export default function Navbar () {
    return (
       
        <nav className="nav--holder">
            <ul className="nav--meni">
                <li className="nav--link"><Link className="link--text" to='/'>Naslovna</Link></li>
                <li className="nav--link"><Link className="link--text" to='/kursevi'>Kursevi</Link></li>
                <li className="nav--link"><Link className="link--text" to='/kontakt'>Kontakt</Link></li>
                <li className="nav--link"><Link className="link--text" to='/blog'>Blog</Link></li>
                <li className="nav--link"><Link className="link--text" to='/korisnilinkovi'>Korisni linkovi</Link></li>
            </ul>
        </nav>
        
    )
}