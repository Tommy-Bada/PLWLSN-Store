import './FirstProp.css'
import Piece from './Piece'
import Arrow from './assets/arrow-right.svg'
import one from './assets/prop-1-a.webp'
import two from './assets/prop-1-b.webp'
import three from './assets/prop-1-c.webp'



function FirstProp(){
    return(
        <section id="first-prop">
          <Piece 
            image = {one}
            text = "TOPS"
            icon = {Arrow}
          />
          <Piece 
            image = {two}
            text = "BOTTOMS"
            icon = {Arrow}
          />
          <Piece 
            image = {three}
            text = "ACCESSORIES"
            icon = {Arrow}
          />
        </section>
    )
}
export default FirstProp