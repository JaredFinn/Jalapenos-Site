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
                <h1>Los Jalape<span>&#241;</span>os</h1>
            </div>
            <div className="nav-center">
                <h3 className="mobile-title">Los Jalape<span>&#241;</span>os</h3>
                <a className="number" href='tel:+18452559000'>(845) 255-9000</a>
            </div>
            <div className="nav-right">
                <ul className="nav-list">
                    <li className="nav-item"><a href="https://www.facebook.com/losjalapenosnp/photos/pb.513164958842598.-2207520000../1699028460256236/?type=3&theater">Menu</a></li>
                    <li className="nav-item"><a href="https://www.facebook.com/photo?fbid=1520885564937589&set=pcb.1520885788270900" target="_blank">Drink Menu</a></li>
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
                    <div className={isOpen ? 'hamburger active': 'hamburger'}>
                        <Hamburger toggled={isOpen} toggle={setOpen} />
                    </div>
                    <div className={isOpen ? 'nav-right-mobile-menu active': 'nav-right-mobile-menu'}>
                        <div className="links">
                            <div>
                                <div>
                                    <ul>
                                    <li><a href="https://www.facebook.com/losjalapenosnp/photos/pb.513164958842598.-2207520000../1699028460256236/?type=3&theater">Menu</a></li>
                                    <li><a href="https://www.facebook.com/photo?fbid=1520885564937589&set=pcb.1520885788270900" target="_blank">Drink Menu</a></li>
                                    <li><a href='#location'
                                    onClick={(e) => {
                                        close()
                                        e.preventDefault();
                                        window.document.getElementById('location')?.scrollIntoView();
                                    }}>Location</a></li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
           
        </nav>
    );
};
