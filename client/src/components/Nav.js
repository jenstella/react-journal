import React from 'react'
import {Link} from "react-router-dom";

export default function Nav() {
    return (
        <div id='nav-container'>
            <Link id="nav-links" style={{ textDecoration: "none", color: "black" }} to={"/"}><button className="nav-button">Home</button></Link>
            <Link id="nav-links" style={{ textDecoration: "none", color: "black" }} to={"/Facts"}><button className="nav-button">Entries</button></Link>
           <Link id="nav-links" style={{ textDecoration: "none", color: "black" }} to={"/Edit"}><button className="nav-button">Edit</button></Link>
        </div>
    )
}
