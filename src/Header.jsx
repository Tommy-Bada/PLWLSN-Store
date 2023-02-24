import './Header.css'
import cartIcon from "./assets/cart.png"

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
                <li>HOME</li>
                <li>BAGS</li>
                <li>HOODIES</li>
                <li>SHOES</li>
                <li>GLASSES</li>
                <li>ROUND NECKS</li>
            </ul>
            <h1 className="logo">PL-WLSN</h1>
            <div><img className="cart-icon" src={cartIcon} /></div>
        </header>
    )
}
export default Header