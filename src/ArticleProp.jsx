import './ArticleProp.css'
import ArticlePiece from './ArticlePiece'
import one from './assets/newsprop-1.webp'
import two from './assets/newsprop-2.webp'
import three from './assets/newsprop-3.webp'


function ArticleProp(){
    return(
        <section id="article-prop">
          <h2>ARTICLES</h2>
          <div>
            <ArticlePiece 
              image = {one}
              title = "HOW TO STYLE OVERSIZED CLOTHING"
              date = "DECEMBER 23, 2022"
              text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales sed nibh id vehicula. Curabitur dignissim quis lacus sed ullamcorper. Curabitur mauris ex, gravida et nibh sit amet, finibus tempus nulla. Curabitur fermentum..."
            />
            <ArticlePiece 
              image = {two}
              title = "BEST MEN ACCESORIES FOR THIS SUMMER"
              date = " JANUARY 1, 2023"
              text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales sed nibh id vehicula. Curabitur dignissim quis lacus sed ullamcorper. Curabitur mauris ex, gravida et nibh sit amet, finibus tempus nulla. Curabitur fermentum..."
            />
            <ArticlePiece 
              image = {three}
              title = "NEW BLANK ESSENTIALS JUST DROPPED"
              date = "JANUARY 4, 2023"
              text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sodales sed nibh id vehicula. Curabitur dignissim quis lacus sed ullamcorper. Curabitur mauris ex, gravida et nibh sit amet, finibus tempus nulla. Curabitur fermentum..."
            /> 
          </div> 
        </section>
    )
}
export default ArticleProp