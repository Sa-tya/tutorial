import SingleProduct from "../singleProduct/singleProduct";
import { BrowserRouter as Router, Route, Link, Switch /*, Redirect*/ } from 'react-router-dom';
import ProductPage from "../productPage/productpage";
import Home from "./homePage";
import History from "./history";
import Likes from "./Likes";
import Cart from "./cart";
import Header from "./header";
import Form from "./form";
function Navbar(){
    
    return <section>
        <Router>
            <Header />
		<div className="w3-bar w3-white" id='navbar'>
            <Link to="/"><li className="w3-bar-item w3-button">Home</li></Link>
            <Link to="/Drama"><li className="w3-bar-item w3-button">Drama</li></Link>
            <Link to="/Romantic"><li className="w3-bar-item w3-button">Romantic</li></Link>
            <Link to="/ScienceFiction"><li className="w3-bar-item w3-button">Science Fiction</li></Link>
            <Link to="/Action"><li className="w3-bar-item w3-button">Action</li></Link>
            <Link to="/Misc"><li className="w3-bar-item w3-button">Miscelenious</li></Link>
            {/* <Link to="/Likes"><li className="w3-bar-item w3-button">Your Likes</li></Link>
            <Link to="/Cart"><li className="w3-bar-item w3-button">Cart</li></Link> */}
            <Link to='/History'><li className='w3-bar-item w3-button'>Order History</li></Link>
            {/* <Link to="/"><li className="w3-bar-item w3-button">Product</li></Link> */}
        </div>
            <Switch>
			<Route exact path='/'> <Home /></Route>
			<Route exact path='/Drama' > <ProductPage payload={{cat: 'Drama',id:0}} /></Route>
            <Route exact path='/Romantic' > <ProductPage payload={{cat: 'Romantic',id:1}} /></Route>
            <Route exact path='/ScienceFiction' > <ProductPage payload={{cat: 'Science Fiction',id:2}} /></Route>
            <Route exact path='/Action' > <ProductPage payload={{cat: 'Action',id:3}} /></Route>
            <Route exact path='/Misc' > <ProductPage payload={{cat: 'Miscelenious',id:4}} /></Route>
            <Route exact path='/Likes'><Likes /></Route>
            <Route exact path='/Cart'><Cart /></Route>
            <Route exact path='/History'> <History /></Route>
            <Route exact path='/Product/:id'> <SingleProduct /></Route>
            <Route exact path='/submit'> <Form /></Route>
			{/* <Route component={Home} /> */}
			</Switch>
		
	</Router>
    </section>
}

export default Navbar;