import { ADD_PRODUCT_CART } from './types';

export const addCart = (productName) => {
    return(dispatch) => {
        console.log("adding to cart");
        console.log("adding to Product", productName);
        dispatch({
            type: ADD_PRODUCT_CART,
            payload: productName
        })
    }
}