import Navbar from "./navbar";
import { createStore } from "redux";
import rootReducer from "../redux/reducer";
import { Provider } from "react-redux";
import './footercss.css'
const store = createStore(rootReducer);

function App(){
    return <>
        <Provider store={store}>
        <Navbar />
        </Provider>
        <footer>
            <h4>It is a e-commerce project by Satya Prakash, just to show case my frontend skills.</h4>
            <h5>I have used React, Redux & CSS.</h5>
            <h4>Developed by : <a href={'https://github.com/Sa-tya/tutorial'} ><strong>Satya Prakash</strong></a></h4>
        </footer>
    </>
}

export default App;
