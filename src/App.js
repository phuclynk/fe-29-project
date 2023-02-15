import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { appRoute } from "./const/routes.const";
import LoginPage from "./pages/auth/login/LoginPage";
import ProductBrowser from "./pages/product/product-browser/ProductBrowser";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path={appRoute.home} element={<div className="home"></div>} />
          <Route path={appRoute.login} element={<LoginPage />} />
          <Route path={appRoute.productList} element={<ProductBrowser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
