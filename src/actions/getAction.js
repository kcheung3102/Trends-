import { GET_NUMBERS_CART }from './types';

export const getNumbers = () => {
    return(dispatch) => {
        console.log("adding to cart");
        dispatch({
            type: GET_NUMBERS_CART
        })
    }
}