import React from "react";
import navlogo from "./Zeus-LMS-logo.svg";
export default function Header(){
    return(
        <header>
            <nav className="nav">
                 <img src={navlogo} alt="logo" className="nav-logo"></img>
                 <p className="icon">U</p>
            </nav>
        </header>
    )

}