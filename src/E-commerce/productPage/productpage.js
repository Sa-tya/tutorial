import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AddinCart, AddinLikes, RemovetoLikes } from "../redux/action";
import './catstyle.css'
import booksname from "../header/bookname";
function ProductPage({ payload }) {
    const images = useSelector(store => store.data)
    const likes = useSelector( store => store.likes)
    let t = payload.id === 4 ? 4 : 10;
    const dispatch = useDispatch()

    return <section className='catcontainer'>
        <h1>Jonour: <strong>{payload.cat}</strong></h1>
        <section className='category'>

            {[...Array(t)].map((itm, indx) =>

                <div key={indx} className='box'>
                    <Link to={"/Product/" + (10 * payload.id + indx)}>
                        <div className='img'>
                            <img src={images[10 * payload.id + indx].default} alt='catimg' />
                        </div>
                    </Link>
                    <div className='boxdata'>
                        <h5><b>{booksname[10 * payload.id + indx][0]}</b> </h5>
                        <p>By <strong>{booksname[10 * payload.id + indx][1]}</strong></p>
                        <h4>Rs.<strong>{10 * payload.id + indx}</strong></h4>
                    </div>
                
                    <svg onClick={() => likes.includes(`${10 * payload.id + indx}`) ?  dispatch(RemovetoLikes(`${10 * payload.id + indx}`)) : dispatch(AddinLikes(`${10 * payload.id + indx}`))} xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill={likes.includes(`${10 * payload.id + indx}`) ? 'red': 'rgb(216, 41, 216)'} className="bi bi-heart-fill likebtn" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                    </svg>
                    
                    <svg  onClick={() => dispatch(AddinCart({ id: (10 * payload.id + indx), qty: 1 }))} xmlns="http://www.w3.org/2000/svg" width="48" height="48" className="bi bi-cart-plus cartbtn" viewBox="0 0 16 16">
                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                    </svg>
                    
                </div>

            )}

        </section>
    </section>;
}

export default ProductPage;