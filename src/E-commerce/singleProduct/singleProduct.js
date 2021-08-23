import './style.css'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddinCart, AddinLikes, RemovetoLikes } from '../redux/action';
import booksname from '../header/bookname';

function SingleProduct() {
    let { id } = useParams();
    const images = useSelector(store => store.data)
    const dispatch = useDispatch()
    const likes = useSelector( store => store.likes)

    return <div className='catcontainer'>
        <h1>Product Discription</h1>
        <section className='discription'>
            <div className='imgContainer'>
                <img src={images[id].default} alt='product name' className='img-fluid' />
                <svg onClick={() => likes.includes(id) ? dispatch(RemovetoLikes(id)):dispatch(AddinLikes(id))} xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill={ likes.includes(id) ?'red':'rgb(216, 41, 216)'} className="bi bi-heart-fill likebtn styl" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                </svg>
            </div>
            <div className='pDetails'>
                <h2><b>{booksname[id][0]}</b></h2>
                <p>Author - <strong>{booksname[id][1]} </strong></p>
                <p>Company : <strong>DEVSNEST PVT Ltd.</strong></p>
                <details>
                    <summary><strong>Details -</strong> </summary>
                    <p style={{fontFamily:'sans-serif',margin:'5px',padding:'5px'}}>Reading books offers numerous advantages. It benefits both your 
                        physical and mental health, and those benefits can last a 
                        lifetime. This is the reason why it is suggested to encourage 
                        children to read from an early age. It is one of the best habits
                         one can develop. Different genres of books are available in the
                          market. One can pick the subject that interests him and expands 
                          his knowledge in the same besides enjoying the various other
                           benefits it offers. By reading books, your brain becomes 
                           stimulated; a strong and active brain reduces the risk 
                           of developing conditions such as Alzheimer’s disease and dementia.
                    </p>
                </details>
                <h2>Rs. <strong>{parseInt(id) + 1}</strong></h2>

                <p>Ratings : 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-star-fill" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-star-half" viewBox="0 0 16 16">
                        <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
                    </svg>
                </p>

                <button style={{margin:'10px 0',backgroundColor:'yellow'}} onClick={() => dispatch(AddinCart({ id: id, qty: 1 }))}>Add to Cart</button>
                <h3 style={{padding: '10px 0'}}>Reviews :</h3>
                <div className='review'>
                    
                    <section>
                    <h5><b>Shyam Kumar</b></h5>
                    <p>It is a must book. Every one should read atleast for once. It is affordable as well.</p>
                    
                    </section>
                    <hr></hr>
                    <section>
                    <h5><b>Ram Kumar</b></h5>
                    <p>It is a amazing book. Every one should read atleast for once</p>
                    </section>
                </div>
            </div>
        </section>
    </div>
}

export default SingleProduct;