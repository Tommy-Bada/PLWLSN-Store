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
              text = "Upgrade your style this season with oversized tees! Perfect for a relaxed or edgy look, pair them with jeans, high-waisted pants, or layer them over a crop top. Shop our wide selection at PLWLSN Stores and find your new go-to for comfortable and stylish fashion..."
            />
            <ArticlePiece 
              image = {two}
              title = "BEST MEN ACCESORIES FOR THIS SUMMER"
              date = " JANUARY 1, 2023"
              text = "Elevate your summer style with the latest men's accessories from PLWLSN Stores. From stylish sunglasses to trendy hats and watches, our collection has everything you need to make a statement. Shop now and complete your look with high-quality pieces designed to keep you on-trend all season long..."
            />
            <ArticlePiece 
              image = {three}
              title = "NEW BLANK ESSENTIALS JUST DROPPED"
              date = "JANUARY 4, 2023"
              text = "Introducing the latest fashion collection from PLWLSN Stores! Featuring the hottest styles and trends for the season, this collection is your ticket to elevating your wardrobe with ease. Shop now and express your unique fashion sense with high-quality pieces you'll love..."
            /> 
          </div> 
        </section>
    )
}
export default ArticleProp