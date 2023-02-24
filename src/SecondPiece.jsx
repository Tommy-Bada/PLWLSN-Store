import './SecondPiece.css'

function SecondPiece(props){
    return(
        <section className="second-piece">
            <img src={props.image} />
            <p>{props.text}</p>
            <p>&#x20A6;{props.price}</p>
            <button>Add to cart</button>
        </section>
    )
}
export default SecondPiece