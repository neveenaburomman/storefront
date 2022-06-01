const initialState = {
    cart : []
};

export default (state = initialState ,action) =>{
    const { type , payload } = action;
    switch(type){
        case 'ADDTOCART' :
            let cart = state.cart;
            cart.push(payload)
            return {cart}
        case 'DELETE' :
            const cartProducts = state.cart.filter(item=> item !== payload) ;
            return { cart : cartProducts}
        default :
        return state;
    }
}

export const addtoCart = (product) => {
    return {
        type : 'ADDTOCART',
        payload : product,
    }
}
export const deleteFromCart = (product) => {
    return {
        type : 'DELETE',
        payload : product,
    }
}