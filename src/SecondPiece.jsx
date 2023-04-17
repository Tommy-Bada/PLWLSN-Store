import './SecondPiece.css'

function SecondPiece(props){
        
        const isCartAdded = props.items.some((item)=>item.id===props.id)
    return(
        <section className="second-piece">
            <img src={props.image} />
            <p>{props.title}</p>
            <p>&#x20A6;{(props.price).toLocaleString()}</p>
            <button 
            style={{
                backgroundColor: isCartAdded ? '#00000090' : 'black',
            }}
            disabled = {isCartAdded}
            onClick={()=>props.addToCart(props.id, props.image, props.title, props.description, props.price, props.quantity, props.totalPrice, props.isActive)}>{isCartAdded ? 'In Cart' : 'Add to Cart'}</button>
        </section>
    )
}
export default SecondPiece