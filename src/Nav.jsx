import './Nav.css'
import Arrow from './assets/arrow-right.svg'
import twitter from './assets/twitter.png'
import facebook from './assets/facebook.png'
import pinterest from './assets/pinterest.png'
import instagram from './assets/instagram.png'
import tiktok from './assets/tiktok.png'
import snapchat from './assets/snapchat.png'
import youtube from './assets/youtube.png'

function Nav(){
    return(
        <nav className='closed-nav'>
            <ul id='nav-links'>
                <li>HOME</li>
                <li>BAGS</li>
                <li>HOODIES</li>
                <li>SHOES</li>
                <li>GLASSES</li>
                <li>ROUND NECKS</li>
            </ul>
            <div className='nav-socials'>
                    <div><img className='social-icon' src={twitter} /></div>
                    <div><img className='social-icon' src={facebook} /></div>
                    <div><img className='social-icon' src={pinterest} /></div>
                    <div><img className='social-icon' src={instagram} /></div>
                    <div><img className='social-icon' src={tiktok} /></div>
                    <div><img className='social-icon' src={snapchat} /></div>
                    <div><img className='social-icon' src={youtube} /></div>
            </div>
        </nav>
    )
}
export default Nav