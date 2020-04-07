
import { ADD_PRODUCT_CART, GET_NUMBERS_CART } from "../actions/types";

const initialState = {
    cartNumbers: 0,
    cartTotal: 0,
    products: {
        shoes: {
            name: "Shoes",
            price: 23.5,
            quantity: 0,
            inCart: false
        },
        jeanJacket: {
            name: "Jean Jacket",
            price: 29.99,
            quantity: 0,
            inCart:false
        },
        blackPants: {
            name: "Black Pants",
            price: 21.99,
            quantity: 0,
            inCart:false
        },
        whiteTshirt: {
            name: "White T Shirt",
            price: 15.99,
            quantity: 0,
            inCart:false
        },
        greyLongSleeve: {
            name: "Grey Long Sleeve Shirt",
            price: 19.99,
            quantity: 0,
            inCart:false
        },
    }
}
 export default (state = initialState, action) => {
     switch(action.type){
         case ADD_PRODUCT_CART:
            let addQuantity = {...state.products[action.payload]}
            addQuantity.quantity += 1;
            addQuantity.inCart = true;
            console.log(addQuantity);
             return {
                 cartNumbers: state.cartNumbers + 1
             }
         case GET_NUMBERS_CART:
             return {
                ...state
             }    
        
         default:
             return state;
     }
 }