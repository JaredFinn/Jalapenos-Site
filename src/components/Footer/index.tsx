import moment from 'moment';
import { SocialBar } from '../SocialBar';

export const Footer: React.FC = () => {
    return (
        <footer className='footer' id='contact-us'>
            <div className='center-content social'>
                <SocialBar />
            </div>
            <div className="nav">
                            <ul className="nav-list">
                                <li className="nav-item"><a className="item-link" href="/">Home</a></li>
                                <p id="lines">|</p>
                                <li className="nav-item"><a className="item-link" href="https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/120562035_1699028470256235_3802361383676925407_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=973b4a&_nc_ohc=OaYYUg5DVdIAX-0F4bJ&_nc_ht=scontent-lga3-2.xx&oh=79fa33b830880fddfdfe6611ad0291b4&oe=618A8649">Menu</a></li>
                                <p id="lines">|</p>
                                <li className="nav-item"><a className="item-link" href="/">Contact</a></li>
                            </ul>
                        </div>
                        <div className="site-general">
                            <ul className="site-general-nav">
                                <li className="general-nav-item"><a className="general-link" href="">Privacy Policy</a></li>
                            </ul>
                        </div>
            <div className='h-contact'>
                <div className='center-grid-justified' style={{ paddingBottom: '.5em' }}>
                    <div className='left' style={{ marginRight: '2em' }}>
                        <h5>Address</h5>
                    </div>
                    <div className='right' style={{ marginLeft: '2em' }}>
                        <h5>Contact</h5>
                    </div>
                </div>
                
                <address>
                    <div className='center-grid-justified'>
                        <div className='left'>
                            <a href='https://goo.gl/maps/2aYVtu5MJZHNTJKt6'>
                                25 N Chestnut St,
                                <br />
                                 New Paltz, NY 12561
                            </a>
                        </div>
                        <div className='right' style={{ marginLeft: '1em' }}>
                            <a href='tel:+18452559000'>
                                (845) 255-9000
                            </a>
                        </div>
                    </div>
                </address>
            </div>
            <div className="copyright">
                &copy; {moment().year()} — Los Jalapenos. All rights reserved.
            </div>
        </footer>
    );
};
