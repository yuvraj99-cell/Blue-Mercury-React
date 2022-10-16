import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import { Login } from "./Component/Login";
import { Signup } from "./Component/Signup";
import UserAccount from "./Component/UserAccount";
import AccountOverview from "./Component/userAccountComponent/AccountOverview";
import MyBluerewards from "./Component/userAccountComponent/MyBluerewards";
import MyPurchases from "./Component/userAccountComponent/MyPurchases"
import MyWishlist from "./Component/userAccountComponent/MyWishlist"
import AccountDetails from "./Component/userAccountComponent/AccountDetails"



function App() {

  return (
    <div className="App">
       
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/user_account" element={<UserAccount/>}>
            <Route path="account_overview" element={<AccountOverview/>}/>
            <Route path="mybluerewards" element={<MyBluerewards/>}/>
            <Route path="mypurchases" element={<MyPurchases/>}/>
            <Route path="mywishlist" element={<MyWishlist/>}/>
            <Route path="accountdetails" element={<AccountDetails/>}/>
          </Route>
          <Route path="/signup" element={<Signup/>}/> 
        </Routes>
    </div>
  );
}

export default App;
