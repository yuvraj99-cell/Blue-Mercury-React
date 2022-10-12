import { COUNT_CART, GET_CART_DATA } from "./actionTypes"

export const getcartCount = (data)=>{
return {
    type : COUNT_CART,
    payload : data
}
}
export const fetchCartData = (data)=>{
    return {
        type : GET_CART_DATA,
        payload : data
    }
}