import { useDispatch, useSelector } from "react-redux";
import { RemovetoLikes, AddinCart } from "../redux/action";
import booksname from "../header/bookname";
function Likes() {
    const dispatch = useDispatch()
    const likes = useSelector(store => store.likes)
    const images = useSelector(store => store.data)

    return <div className='catcontainer'>
        {likes.length ? <h1>WishList</h1> : <h1>WishList is empty</h1>}
        <div className='likes'>
            {likes.map((itm, indx) =>
                <div key={indx} className='likescard'>
                    <div className='likesimg'>
                        <img src={images[itm].default} alt='likes' />
                        <svg onClick={() => dispatch(AddinCart({ id: itm, qty: 1 }))} xmlns="http://www.w3.org/2000/svg" width="48" height="48" className="bi bi-cart-plus cartbtninlikes" viewBox="0 0 16 16">
                            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                    </div>
                    <div className='likesdata'>
                        <h2>{booksname[itm][0]}</h2>
                        <p>Rs.<strong>{itm}</strong> </p>

                        <svg onClick={() => dispatch(RemovetoLikes(itm))} xmlns="http://www.w3.org/2000/svg" width="48" height="48" className="bi bi-trash trashbtn" viewBox="0 0 16 16">
                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                        </svg>
                    </div>
                </div>)}
        </div>
    </div>
}

export default Likes;