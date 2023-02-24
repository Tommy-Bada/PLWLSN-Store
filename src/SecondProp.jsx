import './SecondProp.css'
import SecondPiece from './SecondPiece'
import one from './assets/prop-2-a.webp'
import two from './assets/prop-2-b.webp'
import three from './assets/prop-2-c.webp'
import four from './assets/prop-2-d.webp'


function SecondProp(){
    return(
        <section id="second-prop">
          <h2>QUICK SHOP</h2>
          <p>Shop from our most demanded outfits</p>
          <div>
            <SecondPiece 
              image = {one}
              text = "OVERSIZED TEE - BLACK"
              price = "5,000"
            />
            <SecondPiece 
              image = {two}
              text = "OVERSIZED TEE - GREY"
              price = ""
            />
            <SecondPiece 
              image = {three}
              text = "OVERSIZED TEE - OFF WHITE"
              price = ""
            />
            <SecondPiece
              image = {four}
              text = "OVERSIZED TEE - WHITE"
              price = ""
          />
         </div>
        </section>
    )
}
export default SecondProp