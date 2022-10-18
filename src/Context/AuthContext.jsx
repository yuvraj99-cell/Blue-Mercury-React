import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [isAuth,setIsAuth] = useState({data:{},loggedin:false});

    useEffect(()=>{
      let token = localStorage.getItem('bluemercury-token');
      if(token){
        (async ()=> {
            let res = await fetch(`https://blure-mercury.herokuapp.com/Users?userToken=${token}`);
            let data = await res.json();
            setIsAuth({...isAuth,data:data,loggedin:true});
        })()
        console.log(isAuth)
      }  
    },[isAuth.loggedin])
    console.log(isAuth);
    return <AuthContext.Provider value={{isAuth,setIsAuth}}>
        {children}
    </AuthContext.Provider>
}