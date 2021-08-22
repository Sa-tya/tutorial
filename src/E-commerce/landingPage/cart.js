import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CartCard from "./cartCard";
import { Link } from "react-router-dom";
function Cart() {
    const cart = useSelector(store => store.cart)
    const [total, setTotal] = useState(-1)

    function calculate() {
        // localStorage.setItem('total',total)
        // localStorage.setItem('order', JSON.stringify(cart))
    }
    useEffect(() => {
        let t = 0;
        Object.keys(cart).map((itm) => t += (itm ? itm : 1) * cart[itm].qty)
        setTotal(t)
    }, [cart])
    return <div className='catcontainer'>
        {total !== -1 ? <h1>Your Cart</h1>: <h1>Your Cart is Empty</h1>}
        <div className='cartContainer'>
            <div className='cart'>
                {Object.keys(cart).map((itm, indx) =>
                <CartCard key={indx} id={itm} qty={cart[itm].qty} />
                )}
            </div>
            {total !== -1 ? <div className='invoice'>
                <h5>Sum: <strong>{total}.00</strong> </h5>
                <h6>Discount: <strong>0.00</strong></h6>
                <h6>Tax: {Math.ceil(total/10)}.00 </h6>
                <hr></hr>
                <h4>Final: <strong>{total + Math.ceil(total/10)}.00</strong></h4>
                <Link to={'/submit'}>
                <button className='order' onClick={() => calculate()}><strong>Proceed order</strong></button>
                </Link>
            </div> : ''}
        </div>
    </div>
}

export default Cart;