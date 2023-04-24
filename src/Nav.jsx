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

function Nav(){

    // const hash = pathname.split('#')

    // const section = document.querySelector(`#${hash}`)
    
    // section.scrollIntoView({
    // behavior:'smooth' //optional
    // })


    return(
        <nav className='closed-nav'>
            <ul id='nav-links'>
                <li>HOME</li>
                <li><Link to="/Store">TOPS</Link></li>
                <li><Link to="/Store">HOODIES</Link></li>
                <li><Link to="/Store">BOTTOMS</Link></li>
                <li><Link to="/Store">HOODIES</Link></li>
                <li><Link to="/Store#acc">ACCESSORIES</Link></li>
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