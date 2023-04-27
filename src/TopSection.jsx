import './TopSection.css'
import ScrollIntoView from 'react-scroll-into-view'
function TopSection(){
    return(
        <section id="top-section">
            <ScrollIntoView selector="#footer-top"><button>Jump to bottom</button></ScrollIntoView>
        </section>
    )
}
export default TopSection