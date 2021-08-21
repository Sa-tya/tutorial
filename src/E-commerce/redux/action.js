function AddinCart(item){
    return {
        type:'AddinCart',
        payload: item
    }
}
function Start(itm){
    return {
        type: 'hgfhg',
        payload: itm
    }
}
function RemovetoCart(item){
    return {
        type:'RemovetoCart',
        payload: item
    }
}
function AddinLikes(item){
    return {
        type:'AddinLikes',
        payload: item
    }
}
function RemovetoLikes(item){
    return {
        type: 'RemovetoLikes',
        payload: item
    }
}
function Inc(item){
    return {
        type: 'inc',
        payload: item
    }
}
export {AddinCart, AddinLikes, RemovetoCart, RemovetoLikes, Inc, Start};