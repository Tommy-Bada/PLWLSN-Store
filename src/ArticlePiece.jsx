import './ArticlePiece.css'

function ArticlePiece(props){
    return(
        <section className="article-piece">
            <img src={props.image} />
            <div>
                <p className='article-piece-title'>{props.title}</p>
                <p className='article-piece-date'>{props.date}</p>
                <p className='article-piece-text'>{props.text}</p>
            </div>
        </section>
    )
}
export default ArticlePiece