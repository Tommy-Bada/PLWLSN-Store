import './Store.css'
import cartIcon from "./assets/cart.png"
import arrowLeft from "./assets/arrow-left.png"
import SecondPiece from './SecondPiece'
import topsData from './topsData'
import hoodiesData from './hoodiesData'
import shoesData from './shoesData'
import bottomData from './bottomData'
import accessoriesData from './accessoriesData'
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import ScrollIntoView from 'react-scroll-into-view'

function Store(){

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


    //Load All Products to the Store from the data files
    let tops = topsData.map((product)=>{
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
       isActive = {product.isActive}
       items = {items}
       />
    })
    // let all = [...topsData,...hoodiesData,...bottomData,...shoesData,...accessoriesData].map((product)=>{
    //     return <SecondPiece 
    //     key = {product.id}
    //     title = {product.title}
    //     price = {product.price}
    //     id = {product.id}
    //     addToCart = {addToCart}
    //     quantity = {product.quantity}
    //     totalPrice = {product.price * product.quantity}
    //     image = {product.image}
    //     description = {product.description}
    //     isActive = {product.isActive}
    //     />
    //  })
    let hoodies = hoodiesData.map((product)=>{
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
     let bottoms = bottomData.map((product)=>{
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
     let shoes = shoesData.map((product)=>{
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
     let accessories = accessoriesData.map((product)=>{
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

     const nav = useNavigate()
    return(
        <section id="store">
            <div id='store-header'>
                <div><img onClick={() => nav(-1)} src={arrowLeft} /></div>
                <div><Link to="/Cart"><img src={cartIcon} /></Link></div>
            </div>
            <div id="scrollers">
                <ul>
                    <li><ScrollIntoView selector="#tops">TOPS</ScrollIntoView></li>
                    <li><ScrollIntoView selector="#hoodies">HOODIES</ScrollIntoView></li>
                    <li><ScrollIntoView selector="#bottoms">BOTTOMS</ScrollIntoView></li>
                    <li><ScrollIntoView selector="#shoes">SHOES</ScrollIntoView></li>
                    <li><ScrollIntoView selector="#accessories">ACCESSORIES</ScrollIntoView></li>
                </ul>
            </div>
            <div id='store-container'>
                <h2 id='tops'>TOPS</h2>
                <div>
                    {tops}
                </div>
                <h2 id='hoodies'>HOODIES</h2>
                <div>
                    {hoodies}
                </div>
                <h2 id='bottoms'>BOTTOMS</h2>
                <div>
                    {bottoms}
                </div>
                <h2 id='shoes'>SHOES</h2>
                <div>
                    {shoes}
                </div>
                <h2 id="accessories">ACCESSORIES</h2>
                <div>
                    {accessories}
                </div>
            </div>
        </section>
    )
}
export default Store