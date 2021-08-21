import { useSelector } from "react-redux";

function History() {
    const images = useSelector(state => state.data)
    if(localStorage.getItem('order'))
    var order = JSON.parse(localStorage.getItem('order'))

    return <div className='catcontainer'>
        {order ? <h1>Your Shoping History</h1> : <h1>You have not Purchached anything</h1>}
        <div className='cartContainer'>
            {Object.keys(order).map((itm, indx) => <div key={indx} className='cartCard'>
                <div className='cartimg'>
                    <img src={images[itm].default} alt='order' />
                </div>
                <div>
                    <h2>Title</h2>
                    <h3>price</h3>
                    <h3>Qty - {order[itm].qty}</h3>
                    <h3>cost</h3>
                </div>
            </div>
            )}
        </div>
    </div>
}
export default History;