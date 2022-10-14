import { Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
import Home from "./Component/Home";
import UserAccount from "./Component/UserAccount";


function App() {

  return (
    <div className="App">
       
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/user_account" element={<UserAccount/>}/>
          <Route path="/signup" element={<Signup/>}/> 
        </Routes>
    </div>
  );
}

export default App;
