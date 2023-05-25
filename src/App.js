import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ProductListing />} />
          <Route exact path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
