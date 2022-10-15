import logo from "./logo.svg";
import "./App.css";
import Products from "./Components/Product";
import { Route, Routes } from "react-router-dom";
import { SingleProducts } from "./Components/SingleProducts";

function App() {
  return (
    <div className="App">
      <Routes>


      <Route path="/Products" element={<Products />}>
          {" "}
        </Route>

        <Route path="/Products/:id" element={<SingleProducts />}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
