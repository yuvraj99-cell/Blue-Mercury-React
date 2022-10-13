import { COUNT_CART, GET_ADDRESS, GET_ALREADYAPPLIED, GET_CART_DATA, GET_TOTALAMOUNT } from "./actionTypes"

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
export const getAddress =  (data)=>{
    return {
        type : GET_ADDRESS,
        payload : data
    }
}
export const gettotalAmount = (data)=>{
    return{
        type : GET_TOTALAMOUNT,
        payload : data
    }
}
export const getAlreadyApplied = (data)=>{
    return {
        type : GET_ALREADYAPPLIED,
        payload : data
    }
}