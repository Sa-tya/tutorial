import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AddinCart, AddinLikes, RemovetoLikes } from '../redux/action';
import './style.css'
import booksname from '../header/bookname';
function Homepage() {
    const images = useSelector(state => state.data)
    const likes = useSelector(state => state.likes)
    const dispatch = useDispatch();
    return <>
        {/* <section>Slider</section> */}
        <section className='catContainer'>
            {Object.keys(images).map((itm, indx) =>

                <div key={indx} className='card'>
                    <Link to={"/Product/" + indx}>
                        <div className='img'>
                            <img src={images[itm].default} alt='test' />
                        </div>
                    </Link>
                    <section style={{fontFamily: 'monospace', padding: '5px',margin:'5px'}}>
                        <h5> <b>{booksname[itm][0]}</b></h5>
                        <p>By <b>{booksname[itm][1]}</b></p>
                        <h5>Rs.<strong>{indx+1}</strong></h5>
                        {/* <button onClick={() => dispatch(AddinLikes(itm))}> */}
                        <svg onClick={() => likes.includes(itm) ?  dispatch(RemovetoLikes(itm)): dispatch(AddinLikes(itm))} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill= {likes.includes(itm) ? 'red':"rgb(216, 41, 216)"} className="bi bi-heart-fill likebtn" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                    </svg>
                       <svg onClick={() => dispatch(AddinCart({ id: itm, qty: 1 }))} xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="bi bi-cart-plus cartbtn" viewBox="0 0 16 16">
                            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                        {/* </button> */}
                    </section>
                </div>

            )}
        </section>
    </>
}

export default Homepage;