import { COUNT_CART, GET_CART_DATA } from "./actionTypes"

const initstate = {
    CartCount : 0,
    Cart_Data : []
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
    default :{
        return state;
    }
}
}