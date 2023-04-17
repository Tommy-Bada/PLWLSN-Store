import './CartPiece.css'
import deleteIcon from "./assets/delete-icon.png"


function CartPiece(props){
    return(
        <section className="cart-piece">
            <div className='cp-upper'>
                <div className='cart-image'><img src={props.image} /></div>
                <p>{props.title}</p>
                <div><img onClick={props.handleDelete}src={deleteIcon} width="10rem"/></div>
            </div>
            <div className='cp-middle'>
                <p>&#x20A6; {(props.price).toLocaleString()} X {props.quantity}</p>
                <p>&#x20A6; {(props.totalPrice).toLocaleString()}</p>
            </div>
            <div className='cp-lower'>
                <button className='minus-button'onClick={props.handleDecrease}>-</button>
                <p className='cp-number'>{props.quantity}</p>
                <button className='add-button' onClick={props.handleIncrease}>+</button>
            </div>
        </section>
    )
}
export default CartPiece