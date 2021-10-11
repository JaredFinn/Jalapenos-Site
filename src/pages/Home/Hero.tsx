import { Navbar } from '../../components/Navbar/index';

export const Hero: React.FC = () => {
    return (
        <header className='hero crop'>
            <Navbar/>
            <div className='hero-container'>
                
                <div className='h-logo' style={{textAlign: 'center'}}>
                    <img src="https://menufyproduction.imgix.net/637371690858159795+284634.png?auto=compress,format&h=1080&w=1920&fit=max" alt="logo" />
                </div>
            <div className='hero-content'>                    
                    <div className='h-tag'>
                        <h1>Mexican Restaurant</h1>
                    </div>
                    <div className='h-desc'>
                        <p>Come check out some of our unique and delicious menu items like our House Molcajete served in a sizzling stone bowl! Chef Max and the Los Jalapenos Family are committed to serving some of the most amazing food in the Hudson Valley. Available for dine in, take-out, or use our local delivery service Carry-Out Kings.</p>
                    </div>
                <div className='right-column'>
                    <div className='h-form'>
                    </div>
                </div>
                <div className="restaurant-info" id="location">
                        <div className="restaurant-location">
                            <h6>Located:</h6>
                            <h4 className="address" ><a href='https://goo.gl/maps/2aYVtu5MJZHNTJKt6'>
                                25 N Chestnut St,
                                <br />
                                 New Paltz, NY 12561
                            </a></h4>
                        </div>
                        <div className="restaurant-hours">
                            <ul>
                                <h6>Hours:</h6>
                                <li className="day">Monday: 11AM-10PM</li>
                                <li className="day">Tuesday: 11AM-10PM</li>
                                <li className="day">Wednesday: 11AM-10PM</li>
                                <li className="day">Thursday: 11AM-10PM</li>
                                <li className="day">Friday: 11AM-10PM</li>
                                <li className="day">Saturday: 11AM-10PM</li>
                                <li className="day">Sunday: 11AM-10PM</li>
                            </ul>
                        </div>
                    </div>
            </div>
            </div>
        </header>
    );
};
