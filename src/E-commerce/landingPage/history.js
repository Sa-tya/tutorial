import { useSelector } from "react-redux";
import booksname from "../header/bookname";
function History() {
    const images = useSelector(state => state.data)
    var orders;
    if(localStorage.getItem('order'))
    orders = JSON.parse(localStorage.getItem('order'))
    else
    orders = [];

    return <div className='catcontainer'>
        {orders.length ? <h1>Your Shoping History</h1> : <h1>You have not Purchached anything</h1>}
        <div>
            { orders.map( order => <div className='cartContainer'>
            {Object.keys(order).map((itm, indx) => <div key={indx} className='cartCard'>
                <div className='cartimg'>
                    <img src={images[itm].default} alt='order' />
                </div>
                <div style={{padding:'5px',margin:'5px',fontFamily:'monospace',width:'280px'}}>
                    <h5><b>{booksname[itm][0]}</b></h5>
                    <h4>Rs.<strong>{itm}</strong></h4>
                    <h4>Qty-<strong>{order[itm].qty}</strong></h4>
                    <h4>Sum-<strong>{order[itm].qty * itm}</strong></h4>
                </div>
            </div>
            )} </div>
            )
        }
        </div>
    </div>
}
export default History;