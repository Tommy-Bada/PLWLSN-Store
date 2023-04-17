import './Piece.css'
import { Link, NavLink } from 'react-router-dom'

function Piece(props){
    return(
        <section className="piece">
           <img src={props.image} />
           <div>
                <p>{props.text}</p>
                <div><Link to="/Store"><img src={props.icon} /></Link></div>
           </div>
        </section>
    )
}
export default Piece