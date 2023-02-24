import './Newsletter.css'
import Arrow from './assets/arrow-right.svg'

function Newsletter(){
    return(
        <section id='newsletter'>
           <h2>SUBSCRIBE TO OUR EMAILS</h2>
           <p>Be the first to know about new collections and exclusive offers.</p>
           <form className='letter-form'>
                <div>
                <input className='form-text' type="email" name='email' placeholder='EMAIL'/>
                </div>
                <div>
                <input className='form-submit' type="image" alt="Submit" src={Arrow} />
                </div>
                {/* <input type="submit" value="" style="background-image: url('./assets/arrow-right.svg'); border:none; background-repeat:no-repeat;background-size:100% 100%;" /> */}
           </form>
        </section>
    )
}
export default Newsletter