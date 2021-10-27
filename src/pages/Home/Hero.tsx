import React, { useState, useEffect} from 'react';
import { Navbar } from '../../components/Navbar/index';
import menufy from "../../images/Menufy-Order-Button-1.png"

export const Hero: React.FC = () => {

    const [open, setOpen] = useState(true);
    let signOpen = "Open";
    let signClosed = "Closed";

    var today = new Date(),

    time = today.getHours()
    if(time > 11 && time < 22){
        setOpen(false);
    }

    return (
        <header className='hero crop'>
            <Navbar/>
            <div className='hero-container'>
                <div className='h-logo' style={{textAlign: 'center'}}>
                    <img className="logo" src="losjal.png" alt="logo" width="375" />
                </div>
                <div className='hero-content'>                    
                        <div className='h-tag'>
                            <h1>Mexican Restaurant</h1>
                        </div>
                        <div className='h-desc'>
                            <p>Come check out some of our unique and delicious menu items like our House Molcajete served in a sizzling stone bowl! Chef Max and the Los Jalapenos Family are committed to serving some of the most amazing food in the Hudson Valley. Available for dine in, take-out, or use our local delivery service Carry-Out Kings.</p>
                        </div>

                        <div className="hero-bottom">
                            <div className="order-buttons">
                                <div className="doordash-button">
                                    <a  href="https://www.doordash.com/business/254070/?utm_source=partner-link&utm_medium=website&utm_campaign=254070&utm_content=white-l" target="_blank" title="Order Food Delivery with DoorDash" style={{textDecoration: "none"}}><div style={{position: "relative", width:"289px", height:"59px", margin: "0px auto", backgroundImage: "url(https://cdn.doordash.com/media/button/button_white_l.svg)", color:"transparent"}}>Order Food Delivery with DoorDash</div></a>
                                </div>
                                <div className="button-space">
                                </div>
                                <div className="doordash-button">
                                    <a href="https://www.losjalapenosnewpaltz.com/order" target="_blank" rel="noopener noreferrer" ><img src={menufy} alt="Order Online with Menufy"/></a>
                                </div>
                            </div>
                            <div className="carry-out">
                                    <div className="carryout-container">
                                        <a href="https://www.carryoutkings.com/order/restaurant/los-jalapenos-menu/30">
                                            <button className="carry-out-btn">
                                                    <strong className="carryout-text"><img className="carryout-img" src="https://www.carryoutkings.com/editable/templates/default/images/logo.png" alt="" width="80px" height="30px" />Carry Out Kings</strong>
                                            </button>
                                        </a>
                                    </div>
                            </div>
                            <div className="restaurant-info">
                                    <div className="restaurant-hours">
                                        <ul>
                                            <h6 className="tit">Hours:</h6>
                                            <li className="day">Monday-Sunday: 11AM-10PM</li>
                                        </ul>
                                    </div>
                            </div>
                        </div>
                        
                </div>
            </div>
        </header>
    );
};
