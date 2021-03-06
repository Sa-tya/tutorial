import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Start } from "../redux/action";

function Header() {
    const likes = useSelector( state => state.likes);
    const cart = useSelector( state => state.cart);
    const dispatch = useDispatch()

    return <div className='header'>
        <div className='d2'>
            <Link to={"/"}><svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="white" className="bi bi-book-fill" viewBox="0 0 16 16">
                <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
            </svg></Link>
            <h1>Delta Courner</h1>
        </div>
        <div className='d1'>
            <p>{likes.length}</p>
            <Link to={"/Likes"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill='blue'
                className="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
            {/* <p>2</p> */}
            </svg>
            </Link>
        </div>
        <div className='d1'>
            <p>{Object.keys(cart).length}</p>
            <Link to={"/Cart"}>
                <svg onClick={() => dispatch(Start(11))}
                xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill='brown'
                className="bi bi-cart-plus" viewBox="0 0 16 16">
                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
            </Link>
        </div>
    </div>
}

export default Header;