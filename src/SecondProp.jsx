import React, { useState, useEffect } from 'react';
import './SecondProp.css'
import SecondPiece from './SecondPiece'
import productData from './productData'
import one from './assets/prop-2-a.webp'
import two from './assets/prop-2-b.webp'
import three from './assets/prop-2-c.webp'
import four from './assets/prop-2-d.webp'


function SecondProp(){

  const [items, setItems] = useState(()=>{
    return JSON.parse(localStorage.getItem("cart"))|| []
  });
    // Add data to cart on click
    function addToCart(id, image, title, description, price, quantity, totalPrice, isActive){
    

      let productAddedToCart = {
        id: id,
        image: image,
        title: title,
        description: description,
        price: price,
        quantity:quantity,
        totalPrice:totalPrice,
        isActive: isActive
      }

      
    setItems((prevItem)=>{
        return[...prevItem, productAddedToCart]
        })
    
    }


    //Store to Local Storage
    useEffect(() => {
      // if (items.length > 0){
      localStorage.setItem('cart', JSON.stringify(items));
      // }
    }, [items]);


  
    const goods = productData.map((product)=>{
      return <SecondPiece 
      key = {product.id}
      title = {product.title}
      price = {product.price}
      id = {product.id}
      addToCart = {addToCart}
      quantity = {product.quantity}
      totalPrice = {product.price * product.quantity}
      image = {product.image}
      description = {product.description}
      items = {items}
      />
   })

    return(
        <section id="second-prop">
          <h2>QUICK SHOP</h2>
          <p>Shop from our most demanded outfits</p>
          <div>
            {goods}
         </div>
        </section>
    )
}
export default SecondProp