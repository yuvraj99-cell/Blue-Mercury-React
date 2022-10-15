import { COUNT_CART, GET_ADDRESS, GET_ALREADYAPPLIED, GET_CART_DATA, GET_SHIPPINGCOST, GET_TOTALAMOUNT } from "./actionTypes"

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
export const getShippingCost = (data) =>{
    return {
        type : GET_SHIPPINGCOST,
        payload : data
    }
}
const setCartAmount = (res2,dispatch)=>{
const amount = res2.reduce((acc,ele)=>{
return acc+ (ele.ProductCard__Price*ele.quantity)
},0)
dispatch(gettotalAmount(amount));
}
export const fetchAndUpdate =()=>async(dispatch)=>{
    try {
     let res  = await fetch(`http://localhost:3005/Cart`);
     let res2 = await res.json();
     dispatch(fetchCartData(res2));
     dispatch(getcartCount(res2.length));
     setCartAmount(res2,dispatch);
    } catch (error) {
     console.log(error)
    }
    }

