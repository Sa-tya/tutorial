import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CartCard from "./cartCard";
import { Link } from "react-router-dom";
function Cart() {
    const cart = useSelector(store => store.cart)
    const [total, setTotal] = useState(0)

    function calculate() {
        localStorage.setItem('order', JSON.stringify(cart))
    }
    useEffect(() => {
        let t = 0;
        Object.keys(cart).map((itm) => t += itm * cart[itm].qty)
        setTotal(t)
    }, [cart])
    return <div className='catcontainer'>
        {total ? <h1>Your Cart</h1>: <h1>Your Cart is Empty</h1>}
        <div className='cartContainer'>
            <div className='cart'>
                {Object.keys(cart).map((itm, indx) =>
                <CartCard key={indx} id={itm} qty={cart[itm].qty} />
                )}
            </div>
            {total ? <div className='invoice'>
                <h2>Total: Rs. <strong>{total}</strong> </h2>
                <h3>Discount: Rs. <strong>0</strong></h3>
                <h3>Tax: 0 </h3>
                <h2>Total: <strong>{total}</strong></h2>
                <Link to={'/submit'}>
                <button className='order' onClick={() => calculate()}><strong>Proceed order</strong></button>
                </Link>
            </div> : ''}
        </div>
    </div>
}

export default Cart;