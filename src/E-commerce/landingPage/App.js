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
            <h4>It is a initiative project of 
                <a href={'https://www.devsnest.in/'}><strong>  DEVSNEST.</strong></a></h4>
            <h5>Which aims to make Education affordable to everyone.</h5>
            <h4>Developed by : <strong>Delta Team</strong></h4>
        </footer>
    </>
}

export default App;