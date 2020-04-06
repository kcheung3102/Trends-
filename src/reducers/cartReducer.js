
import { ADD_PRODUCT_CART } from "../actions/types";

const initialState = {
    cartNumbers: 0
}
 export default (state = initialState, action) => {
     switch(action.type){
         case ADD_PRODUCT_CART:
             return{
                 cartNumbers: this.cartNumbers + 1
             }
         default:
             return state;
     }
 }