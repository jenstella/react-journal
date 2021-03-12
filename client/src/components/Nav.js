import React from 'react'
import {Link} from "react-router-dom";

export default function Nav() {
    return (
        <div id='nav-container'>
            <Link id="nav-links" style={{ textDecoration: "none", color: "black" }} to={"/"}>Home</Link>
            <br></br>
            <Link id="nav-links" style={{ textDecoration: "none", color: "black" }} to={"/Facts"}>Entries</Link>
            <br></br>
            <Link id="nav-links" style={{ textDecoration: "none", color: "black" }} to={"/Edit"}>Edit</Link>
        </div>
    )
}
