import './style.css'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddinCart, AddinLikes } from '../redux/action';
import booksname from '../header/bookname';

function SingleProduct() {
    let { id } = useParams();
    const images = useSelector(store => store.data)
    const dispatch = useDispatch()

    return <div className='catcontainer'>
        <h1>Product Discription</h1>
        <section className='discription'>
        <div className='imgContainer'>
            <img src={images[id].default} alt='product name' className='img-fluid' />
            <svg onClick={() => dispatch(AddinLikes(id))} xmlns="http://www.w3.org/2000/svg" width="64" height="64" className="bi bi-heart-fill likebtn styl" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
            </svg>
        </div>
        <div className='pDetails'> 
            <h2>{booksname[id][0]}</h2>
            <p>Author - <strong>{booksname[id][1]} </strong></p>
            <p>Company : <strong>DEVSNEST PVT Ltd.</strong></p>
            <details>
                <summary>Details - </summary>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente 
                    aspernatur, amet facere reiciendis, vitae tempora optio temporibus 
                    consectetur aliquam veritatis officiis? Atque dignissimos sapiente 
                    libero at dolores quaerat quos veritatis?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente 
                    aspernatur, amet facere reiciendis, vitae tempora optio temporibus 
                    consectetur aliquam veritatis officiis? Atque dignissimos sapiente 
                    libero at dolores quaerat quos veritatis?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente 
                    aspernatur, amet facere reiciendis, vitae tempora optio temporibus 
                    consectetur aliquam veritatis officiis? Atque dignissimos sapiente 
                    libero at dolores quaerat quos veritatis?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente 
                    aspernatur, amet facere reiciendis, vitae tempora optio temporibus 
                    consectetur aliquam veritatis officiis? Atque dignissimos sapiente 
                    libero at dolores quaerat quos veritatis?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente 
                    aspernatur, amet facere reiciendis, vitae tempora optio temporibus 
                    consectetur aliquam veritatis officiis? Atque dignissimos sapiente 
                    libero at dolores quaerat quos veritatis?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente 
                    aspernatur, amet facere reiciendis, vitae tempora optio temporibus 
                    consectetur aliquam veritatis officiis? Atque dignissimos sapiente 
                    libero at dolores quaerat quos veritatis?
                    </p>
            </details>
            <h2>Rs. <strong>{id}</strong></h2>

            {/* <div className='counter'>
                <button onClick={()=> setQty(qty+1)}>-</button>
                <h2>{qty}</h2>
                <button onClick={()=> setQty(qty+1)}>+</button>
            </div> */}

            <button onClick={() => dispatch(AddinCart({ id: id, qty: 1 }))}>Add to Cart</button>
        </div>
        </section>
    </div>
}

export default SingleProduct;