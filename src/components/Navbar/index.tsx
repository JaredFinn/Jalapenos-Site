import React, { useState, useEffect} from 'react';
import { slide as Menu } from 'react-burger-menu';

export const Navbar: React.FC = () => {

    const [navbar,setNavbar] = useState(false);

    const navScroll = () => {
        if(window.scrollY >= 80) {
            setNavbar(true)
        }
        else{
            setNavbar(false)
        }
    }


    window.addEventListener('scroll', navScroll)

    return (
        <nav className={navbar ? 'nav-container active': 'nav-container'}>
            <div className="nav-left">
                <h1>Los Jalapenos</h1>
            </div>
            <div className="nav-center">
                 <a className="number" href='tel:+18452559000'>(845) 255-9000</a>
                
            </div>
            <div className="nav-right">
                <ul className="nav-list">
                    <li className="nav-item"><a href="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/120562035_1699028470256235_3802361383676925407_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=973b4a&_nc_ohc=OaYYUg5DVdIAX-0F4bJ&_nc_ht=scontent-lga3-2.xx&oh=79fa33b830880fddfdfe6611ad0291b4&oe=618A8649">Menu</a></li>
                    <li className="nav-item"><a
                    href='#location'
                    onClick={(e) => {
                        e.preventDefault();
                        window.document.getElementById('location')?.scrollIntoView();
                    }}
                >
                    Location
                </a></li>
                </ul>
                <Menu className="hamburger">
                        <a id="home" className="menu-item" href="/">Home</a>
                        <a id="about" className="menu-item" href="/about">About</a>
                        <a id="contact" className="menu-item" href="/contact">Contact</a>
                        <a  className="menu-item--small" href="">Settings</a>
                </Menu>
            </div>
        </nav>
    );
};
