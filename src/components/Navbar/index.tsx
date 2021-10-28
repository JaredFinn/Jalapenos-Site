import React, { useState, useEffect} from 'react';
import { Divide as Hamburger } from 'hamburger-react'

export const Navbar: React.FC = () => {

    const [navbar,setNavbar] = useState(false);

    const [isOpen, setOpen] = useState(false)

    const close = () => {
        setOpen(false)
    }

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
                <h3 className="mobile-title">Los Jalapenos</h3>
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
            </div>
            <div className="nav-right-mobile">
                <div className="mobile-menu">
                    <div className="hamburger">
                        <Hamburger toggled={isOpen} toggle={setOpen} />
                    </div>
                </div>
            </div>
            <div className={isOpen ? 'nav-right-mobile-menu active': 'nav-right-mobile-menu'}>
                <a onClick={() => close()} className='closebtn'>&times;</a>
                <div className="links">
                    <a href="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/120562035_1699028470256235_3802361383676925407_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=973b4a&_nc_ohc=OaYYUg5DVdIAX-0F4bJ&_nc_ht=scontent-lga3-2.xx&oh=79fa33b830880fddfdfe6611ad0291b4&oe=618A8649">Menu</a>
                    <a href='#location'
                        onClick={(e) => {
                            close()
                            e.preventDefault();
                            window.document.getElementById('location')?.scrollIntoView();
                        }}>Location</a>
                </div>
            </div>
        </nav>
    );
};
