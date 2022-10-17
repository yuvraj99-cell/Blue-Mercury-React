import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [isAuth,setIsAuth] = useState({data:{},loggedin:false});

    useEffect(()=>{
      let token = JSON.parse(localStorage.getItem('bluemercury-token'));
      if(token){
        (async ()=> {
            let res = await fetch(`https://blue-mercury.onrender.com/Users?userToken=${token}`);
            let data = await res.json();
            setIsAuth({...isAuth,data:data,loggedin:true});
        })()
        console.log(isAuth)
      }  
    },[isAuth])
    return <AuthContext.Provider value={{isAuth,setIsAuth}}>
        {children}
    </AuthContext.Provider>
}