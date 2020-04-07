import { ADD_PRODUCT_CART } from './types';

export const addCart = (productName) => {
    return(dispatch) => {
        console.log("adding to cart");
        dispatch({
            type: ADD_PRODUCT_CART,
            payload: productName
        })
    }
}