import './Nav.css'
import Arrow from './assets/arrow-right.svg'
import twitter from './assets/twitter.png'
import facebook from './assets/facebook.png'
import pinterest from './assets/pinterest.png'
import instagram from './assets/instagram.png'
import tiktok from './assets/tiktok.png'
import snapchat from './assets/snapchat.png'
import youtube from './assets/youtube.png'
import { Link, NavLink } from 'react-router-dom'
import ScrollIntoView from 'react-scroll-into-view'

function Nav(){ 
    const hideNav = ()=>{
        let menu = document.querySelector("nav")
        menu.classList.remove("opened-nav");
        menu.classList.add("closed-nav");
    }  

    return(
        <nav className='closed-nav'>
            <ul id='nav-links'>
                <li><Link to="/Store">STORE</Link></li>
                <li onClick={hideNav}><ScrollIntoView selector="#second-prop">QUICK SHOP</ScrollIntoView></li>
                <li onClick={hideNav}><ScrollIntoView selector="#article">BLOG</ScrollIntoView></li>
                <li onClick={hideNav}><ScrollIntoView selector="#newsletter">NEWS LETTER</ScrollIntoView></li>
                <li onClick={hideNav}><ScrollIntoView selector="#brand-text">THE BRAND</ScrollIntoView></li>
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