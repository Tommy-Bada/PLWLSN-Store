import './Header.css'
import cartIcon from "./assets/cart.png"
import { Link, NavLink } from 'react-router-dom'
import ScrollIntoView from 'react-scroll-into-view'

function Header(){
    function openMenuBar(){
        let menu = document.querySelector("nav")
        if(menu.classList.contains("closed-nav") == true ){
            menu.classList.add("opened-nav");
            menu.classList.remove("closed-nav");
        }
        else{
            menu.classList.remove("opened-nav");
            menu.classList.add("closed-nav");
        //     mobileMenu.style.opacity = 0
        //     mobileMenu.style.transform = ("translateY(-100vh)")
        //     hamburgerShortLine[0].style.width = "3rem"
        //     hamburgerShortLine[1].style.width = "3rem"
        }
    }
    return(
        <header>
            <div id="hamburger-icon" onClick={openMenuBar}>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>
            <ul id='header-links'>
                <li><Link to="/Store">STORE</Link></li>
                <li><ScrollIntoView selector="#second-prop">QUICK SHOP</ScrollIntoView></li>
                <li><ScrollIntoView selector="#article">BLOG</ScrollIntoView></li>
                <li><ScrollIntoView selector="#newsletter">NEWS LETTER</ScrollIntoView></li>
                <li><ScrollIntoView selector="#brand-text">THE BRAND</ScrollIntoView></li>
            </ul>
            <h1 className="logo">PL-WLSN</h1>
            <div><Link to="/Cart" ><img className="cart-icon" src={cartIcon} /></Link></div>
        </header>
    )
}
export default Header