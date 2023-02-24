import './Footer.css'
import Arrow from './assets/arrow-right.svg'
import twitter from './assets/twitter.png'
import facebook from './assets/facebook.png'
import pinterest from './assets/pinterest.png'
import instagram from './assets/instagram.png'
import tiktok from './assets/tiktok.png'
import snapchat from './assets/snapchat.png'
import youtube from './assets/youtube.png'

function Footer(){
    return(
        <footer>
            <div id='footer-top'>
                <h1>PL-WLSN</h1>
                <div>
                    <h3>LINKS</h3>
                    <ul className='footer-nav'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h3>LEGAL</h3>
                    <ul className='footer-nav'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <h3>THE BRAND</h3>
                    <p id='brand-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a placerat turpis. Nullam consequat tristique nunc porttitor rhoncus. Nulla eleifend leo aliquam aliquet dignissim.</p>
                </div>
            </div>
            <div id='footer-bottom'>
                <div>
                    <h3>SIGN UP FOR 15% OFF</h3>
                    <form className='footer-form'>
                        <div>
                            <input className='form-text footer-text' type="email" name='email' placeholder='EMAIL'/>
                        </div>
                        <div>
                            <input className='form-submit' type="image" alt="Submit" src={Arrow} />
                        </div>
                    </form>
                </div>
                <div className='socials'>
                    <div><img className='social-icon' src={twitter} /></div>
                    <div><img className='social-icon' src={facebook} /></div>
                    <div><img className='social-icon' src={pinterest} /></div>
                    <div><img className='social-icon' src={instagram} /></div>
                    <div><img className='social-icon' src={tiktok} /></div>
                    <div><img className='social-icon' src={snapchat} /></div>
                    <div><img className='social-icon' src={youtube} /></div>
                </div>
            </div>
            <p className="ctext">© 2023, PL-WLSN Stores. All content on this website is for demo purposes only.</p>
        </footer>
    )
}
export default Footer