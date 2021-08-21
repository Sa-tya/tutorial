import { useSelector } from "react-redux";
import booksname from "../header/bookname";
function History() {
    const images = useSelector(state => state.data)
    var order;
    if(localStorage.getItem('order'))
    order = JSON.parse(localStorage.getItem('order'))
    else
    order = {};

    return <div className='catcontainer'>
        {Object.keys(order).length ? <h1>Your Shoping History</h1> : <h1>You have not Purchached anything</h1>}
        <div className='cartContainer'>
            {Object.keys(order).map((itm, indx) => <div key={indx} className='cartCard'>
                <div className='cartimg'>
                    <img src={images[itm].default} alt='order' />
                </div>
                <div>
                    <h2>{booksname[itm][0]}</h2>
                    <h3>Rs. {itm}</h3>
                    <h3>Qty - {order[itm].qty}</h3>
                    <h3>cost- {order[itm].qty * itm}</h3>
                </div>
            </div>
            )}
        </div>
    </div>
}
export default History;