import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import HomePage from "./pages/homePage/homePage";
import LoginPage from "./pages/login/loginPage";
import ProductListPage from "./pages/productListPage/productListPage";
import Sidebar from "./components/sidebar/sidebar";
import Input from "./pages/login/testing/input";
import ParentTest from "./pages/login/testing/parent";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/test" element={<ParentTest />} />
          <Route path="/product-list" element={<ProductListPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
