import './Cart.css'
import CartPiece from './CartPiece'
import { useState, useEffect } from 'react'
import arrowLeft from "./assets/arrow-left.png"
import { Link, NavLink, useNavigate } from 'react-router-dom'

function Cart(){
    // This fetchs orders added to cart from local storage
    let cartData;
    function fetchCartData(){
        cartData = JSON.parse(localStorage.getItem("cart"))
    }
    fetchCartData()

    // This Stores the cart as a state 
    const [cart, setCart] = useState(cartData)

    // This increases quantity of item
    function increaseQuantity(id){
        const newCart = cart.map((product)=>{
            if(product.id === id){
                return{
                    ...product,
                    quantity: product.quantity + 1,
                    totalPrice: product.totalPrice + product.price
                } 
            }
            else{
                return product
            }
        })
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));

    }

    // This Reduces quantity of item
    function decreaseQuantity(id){
        const newCart = cart.map((product)=>{
            if(product.id === id && product.quantity>1){
                    return{
                        ...product,
                        quantity: product.quantity - 1,
                        totalPrice: product.totalPrice - product.price
                    } 
            }
            else{
                return product
            }
        })
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    }

    // delete 
    function deleteProduct(id){
        const newCart = cart.filter(product=>{
            return product.id !== id ;
        })
        setCart(newCart)

        let carts;
        if(localStorage.getItem('cart') === null){
            carts = [];
        } else{
            carts = JSON.parse(localStorage.getItem('cart'));
        } 
    
        carts.forEach(function(product, index){
            if(product.id === id){
                carts.splice(index, 1)
            }
        });
    
        localStorage.setItem('cart', JSON.stringify(carts));
    }
    

    // This helps us calculate the total
    let totalAmount = cart.reduce((accumulator, object) =>{
        return accumulator + object.totalPrice;
    }, 0)

        
    const productsAddedToCart = cart.map((product)=>{
        return <CartPiece key = {product.id}
            title = {product.title}
            price = {product.price}
            handleDecrease = {()=>decreaseQuantity(product.id)}
            handleIncrease = {()=>increaseQuantity(product.id)}
            handleDelete = {()=>deleteProduct(product.id)}
            quantity = {product.quantity}
            totalPrice = {product.totalPrice}
            image = {product.image}
          />
      })

      const nav = useNavigate()
    return(
        <div id='cart-section'>
            <div className='arrow'><img onClick={() => nav(-1)} src={arrowLeft} /></div>
            <section className="cart">
                {productsAddedToCart}
            </section>
            <p className='total-price'>
                Total:&#x20A6;{totalAmount.toLocaleString()}
            </p>
            <div><button className='checkout-btn'>Checkout</button></div>
        </div>
    )
}
export default Cart