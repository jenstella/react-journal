import React from 'react'
import {Link} from "react-router-dom";

export default function Nav() {
    return (
        <div id='nav-container'>
            <button className="nav-button"><Link id="nav-links" style={{ textDecoration: "none", color: "black" }} to={"/"}>Home</Link></button>
            <button className="nav-button"><Link id="nav-links" style={{ textDecoration: "none", color: "black" }} to={"/Facts"}>Entries</Link></button>
            <button className="nav-button"><Link id="nav-links" style={{ textDecoration: "none", color: "black" }} to={"/Edit"}>Edit</Link></button>
        </div>
    )
}
