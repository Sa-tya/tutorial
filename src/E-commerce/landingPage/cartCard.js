import { useDispatch, useSelector } from "react-redux";
import { AddinCart, RemovetoCart } from "../redux/action";
import booksname from "../header/bookname";
function CartCard({ id, qty }) {
    const dispatch = useDispatch()
    const images = useSelector(store => store.data)
    
    return <div className='cartCard'>
        <div className="cartimg">
            <img src={images[id].default} alt='cartpic' />
        </div>
        <div className='cartdata'>
            <h2>{booksname[id][0]} </h2>
            <p>Rs. {id} </p>
            <p>Total : <strong>{id*qty}</strong> </p>
            <div className='counter'>
                <button onClick={() => dispatch(AddinCart({id:id, qty:(qty ===1 ? 1 : qty-1)}))}>-</button>
                <h2>{qty}</h2>
                <button onClick={() => dispatch(AddinCart({id:id, qty:qty+1}))}>+</button>
            </div>
            
        </div>
        <svg onClick={() => dispatch(RemovetoCart(id))} xmlns="http://www.w3.org/2000/svg" width="48" height="48" className="bi bi-trash trashbtn" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
        </svg>
    </div>
}
export default CartCard;