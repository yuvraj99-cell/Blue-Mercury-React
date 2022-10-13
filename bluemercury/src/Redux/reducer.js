import { COUNT_CART, GET_ADDRESS, GET_ALREADYAPPLIED, GET_CART_DATA, GET_TOTALAMOUNT } from "./actionTypes"

const initstate = {
    CartCount : 0,
    Cart_Data : [],
    address : '',
    totalAmount : 0,
    alreadyapplied : false,
}

export const reducer = (state=initstate,action)=>{
switch(action.type){
    case COUNT_CART : {
        return {...state,CartCount:action.payload}
    }
    case GET_CART_DATA : {
        return {
            ...state,Cart_Data:action.payload
        }
    }
    case GET_ADDRESS : {
        return {
          ...state,address:action.payload
        }
    }
    case GET_TOTALAMOUNT : {
        return {
            ...state,totalAmount:action.payload
        }
    }
    case GET_ALREADYAPPLIED : {
        return {
            ...state,alreadyapplied:action.payload
        }
    }
    default :{
        return state;
    }
}
}