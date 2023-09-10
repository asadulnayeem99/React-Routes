// import { Route, Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Review from "./components/Review/Review";
import Shop from "./components/Shop/Shop.js";
function App() {
  return (
    <div>
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path="/shop" element={<Shop></Shop>}>
          </Route>
          <Route path="/review" element={<Review></Review>}>
          </Route>
          <Route path="/inventory" element={<Inventory></Inventory>}></Route>
          <Route exact path="/" element={<Shop></Shop>}></Route>
          <Route path="/product/:productKey" element={<ProductDetail></ProductDetail>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
