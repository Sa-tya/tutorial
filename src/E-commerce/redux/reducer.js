import { combineReducers } from "redux";

function importAll(r) {
    let images = {};
    r.keys().map((item, index) =>
        images[index] = r(item)
    );
    return images;
}
const images = importAll(require.context('../assets', false, /\.(jpg|png|jpe?g|svg)$/));
//   item.replace('./', '')

function dataReducer(state = images, action) {
    return state;
}
function cartReducer(state = {}, action) {

    switch (action.type) {
        case 'AddinCart':
            if(localStorage.getItem('cart'))
            state = JSON.parse(localStorage.getItem('cart'))
            state = { ...state, [action.payload.id]: { qty: action.payload.qty } }
            localStorage.setItem('cart',JSON.stringify(state))
            return  state//[...state,action.payload]
        case 'RemovetoCart':
            if(localStorage.getItem('cart'))
            state = JSON.parse(localStorage.getItem('cart'))
            state = Object.keys(state).filter((itm) => itm !== action.payload).reduce((x, y) => {
                x[y] = state[y]
                return x;
            }, {})
            localStorage.setItem('cart',JSON.stringify(state))
            return state
        case 'inc':
            state[action.payload.id].qty = action.payload.qty
            localStorage.setItem('cart',JSON.stringify(state))
            // state.map((itm)=> itm.id === action.payload.id ? (itm.qty = action.payload.qty) : itm )
            return state
        default:
            if(localStorage.getItem('cart'))
            state = JSON.parse(localStorage.getItem('cart'))
            return state;
    }
}
function likesReducer(state = [], action) {
    switch (action.type) {
        case 'AddinLikes':
            return [...state, action.payload]
        case 'RemovetoLikes':
            return state.filter((itm, indx) => itm !== action.payload)
        default:
            return state;
    }
}
const rootReducer = combineReducers({
    data: dataReducer,
    cart: cartReducer,
    likes: likesReducer,

});

export default rootReducer;