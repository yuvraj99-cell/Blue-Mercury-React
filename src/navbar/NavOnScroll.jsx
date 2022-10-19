import React from 'react';
import { useState } from "react";
import Styles from "./Navonscroll.module.css"

function NavOnScroll() {
    const [stick, setStick] = useState(false);
    window.addEventListener('scroll', showNav);
    const showNav = () => {
        if (window.scrollY > 155) {
            setStick(true);
        }
        else {
            setStick(false);
        } 

    }
    return (
        <div>
            <div className={stick? Styles.scrollnavActive:'scrollnav'}> </div> 
        </div>
        
    )
}

export default NavOnScroll;